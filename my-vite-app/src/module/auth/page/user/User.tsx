import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "../../../../components/Sidebar";
import Navbar from "../../../../components/Navbar";
import type { UserType } from "../../auth-user/@type";
import {
    getUser,
    getidUser,
    postUser,
    editUser,
    deleteUser,
} from "../../auth-user/@service-user";

type _postuser = Pick<UserType, "name" | "password" | "email">;

const Modal = ({
    children,
    onClose,
}: {
    children: React.ReactNode;
    onClose: () => void;
}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

const User = () => {
    const [userData, setUserData] = useState<UserType[]>([]);
    const [editUserData, setEditUserData] = useState<UserType | null>(null);
    const [showModal, setShowModal] = useState(false);

    const fetchData = async () => {
        try {
            const res = await getUser();
            setUserData(res.data);
        } catch (error: any) {
            console.error("Error fetching users:", error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteUser(id);
            fetchData();
        } catch (error: any) {
            console.error("Error deleting user:", error.message);
        }
    };

    const handleEdit = async (user: UserType) => {
        try {
            const res = await getidUser(user._id);
            setEditUserData(res.data);
            setShowModal(true);
        } catch (error: any) {
            console.error("Error getting user:", error.message);
        }
    };

    const handleCreate = () => {
        setEditUserData(null);
        setShowModal(true);
    };

    const formik = useFormik<_postuser>({
        enableReinitialize: true,
        initialValues: {
            name: editUserData?.name || "",
            password: "",
            email: editUserData?.email || "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3).max(50).required("Name is required"),
            password: Yup.string().min(3).max(50).required("Password is required"),
            email: Yup.string().email().required("Email is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("password", values.password);
                formData.append("email", values.email);

                if (editUserData) {
                    await editUser(editUserData._id, formData);
                    setEditUserData(null);
                } else {
                    await postUser(formData);
                }

                resetForm();
                fetchData();
                setShowModal(false);
                alert("Success");
            } catch (error: any) {
                console.error("Form error:", error.message);
            }
        },
    });

    const checkError = (field: keyof _postuser) =>
        !!(formik.touched[field] && formik.errors[field]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar title="User" />
                <div className="p-6 space-y-6">
                    {/* Modal Form */}
                    {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <form onSubmit={formik.handleSubmit} className="space-y-4">
                                <h2 className="text-lg font-semibold">
                                    {editUserData ? "Edit User" : "Add New User"}
                                </h2>

                                <div>
                                    <label className="block text-sm">Name</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("name")}
                                        className="border p-2 w-full rounded"
                                    />
                                    {checkError("name") && (
                                        <p className="text-red-500 text-sm">
                                            {formik.errors.name}
                                        </p>
                                    )}
                                </div>
                                {
                                    !editUserData && <div>
                                        <label className="block text-sm">Password</label>
                                        <input
                                            type="password"
                                            {...formik.getFieldProps("password")}
                                            className="border p-2 w-full rounded"
                                        />
                                        {checkError("password") && (
                                            <p className="text-red-500 text-sm">
                                                {formik.errors.password}
                                            </p>
                                        )}
                                    </div>
                                }


                                <div>
                                    <label className="block text-sm">Email</label>
                                    <input
                                        type="email"
                                        {...formik.getFieldProps("email")}
                                        className="border p-2 w-full rounded"
                                    />
                                    {checkError("email") && (
                                        <p className="text-red-500 text-sm">
                                            {formik.errors.email}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                >
                                    {editUserData ? "Update" : "Submit"}
                                </button>
                            </form>
                        </Modal>
                    )}

                    {/* Table */}
                    <div className="bg-white shadow rounded-md p-4 gap-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold">User Management</h2>
                            <button
                                className="p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md flex items-center gap-2"
                                onClick={handleCreate}
                            >
                                <FaPlus />
                                <span>Create</span>
                            </button>
                        </div>

                        <div className="overflow-x-auto rounded-md border">
                            <table className="w-full text-left">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Email</th>
                                        <th className="px-4 py-2">Position</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.length > 0 ? (
                                        userData.map((user) => (
                                            <tr key={user._id} className="border-b">
                                                <td className="px-4 py-2">{user.name}</td>
                                                <td className="px-4 py-2">{user.email}</td>
                                                <td className="px-4 py-2">Admin</td>
                                                <td className="px-4 py-2 space-x-2">
                                                    <button
                                                        className="bg-gray-100 p-2 rounded hover:bg-gray-200"
                                                        onClick={() => handleEdit(user)}
                                                    >
                                                        <FaEdit className="text-gray-700" />
                                                    </button>
                                                    <button
                                                        className="bg-red-100 p-2 rounded hover:bg-red-200"
                                                        onClick={() => handleDelete(user._id)}
                                                    >
                                                        <FaTrash className="text-red-600" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={4}
                                                className="text-center py-4 text-gray-500"
                                            >
                                                No users found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination UI */}
                        <div className="flex justify-between items-center text-sm mt-4 px-2">
                            <span>Showing 1 - 5 out of {userData.length} data</span>
                            <div className="flex gap-1">
                                <button className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100">
                                    &lt;
                                </button>
                                <button className="px-3 py-1 border rounded bg-teal-600 text-white">
                                    1
                                </button>
                                <button className="px-3 py-1 border rounded hover:bg-gray-100">
                                    2
                                </button>
                                <button className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-100">
                                    &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;
