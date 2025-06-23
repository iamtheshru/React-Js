import { useEffect, useState } from "react";
import type { UserType } from "../../auth-user/@type";
import axios from "axios";
import { deleteUser, editUser, getidUser, getUser, postUser } from "../../auth-user/@service-user";
import Search from "antd/es/transfer/search";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../../../components/Sidebar";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import Pagination from "../../../../components/Pagenation";
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


type _userType = Pick<UserType, 'name' | 'password' | 'email'>;
const User = () => {
    const [userData, setUserData] = useState<UserType[]>([]);
    const [editUserData, setEditUserData] = useState<UserType | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    // Pagination states
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        try {
            const res = await getUser(page, limit, search);
            setUserData(res.data);
            setTotalUsers(res.totalUsers);
            setTotalPages(res.totalPages);
            console.log(res);

        } catch (error: any) {
            console.error("Error fetching user data:", error);
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    const handleDelete = async (id: string) => {
        try {
            await deleteUser(id);
            fetchData(); // Refresh the user list after deletion
        } catch (error: any) {
            console.error("Error deleting user:", error);
        }
    }

    const handleEdit = async (user: UserType) => {
        try {
            const res = await getidUser(user._id);
            setEditUserData(res.data);
            setShowModal(true);
        } catch (error: any) {
            console.error("Error editing user:", error);
        }
    }

    const handleSortByName = () => {
        const sortedData = [...userData].sort((a, b) => {
            return sortOrder === "asc"
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        });
        setUserData(sortedData);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }



    const handleCreate = () => {
        setEditUserData(null); // Reset edit state
        setShowModal(true); // Show modal for creating a new user
    }
    const formik = useFormik<_userType>({
        initialValues: {
            name: editUserData?.name || "",
            email: editUserData?.email || "",
            password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email format").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const formdata = new FormData();
                formdata.append("name", values.name);
                formdata.append("email", values.email);
                formdata.append("password", values.password);

                if (editUserData) {
                    await editUser(editUserData._id, formdata);
                    setEditUserData(null);
                } else {
                    await postUser(formdata);
                }

                resetForm();
                fetchData();
                setShowModal(false);
                alert("Success");// Refresh the user list after adding a new user
            } catch (error) {
                console.error("Error creating user:", error);
            }
        }
    })



    const checkError = (field: keyof _userType) => {
        if (formik.touched[field] && formik.errors[field]) return true;
        else return false;
    }
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Navbar title="User" />
                    <div className="p-6 space-y-6">
                        {/* Modal */}
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

                                    {!editUserData && (
                                        <div>
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
                                    )}

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

                        {/* User Table */}
                        <div className="bg-white shadow rounded-md p-4 gap-4">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">User Management</h2>
                                <input
                                    type="text"
                                    className="border p-1 rounded"
                                    placeholder="Search by name/email"
                                    value={search}
                                    onChange={handleChange}
                                />

                                <button
                                    onClick={() => fetchData()} // Trigger search manually
                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Search
                                </button>
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
                                            <th
                                                className="px-4 py-2 cursor-pointer select-none"
                                                onClick={handleSortByName}
                                            >
                                                Name {sortOrder === "asc" ? "↑" : "↓"}
                                            </th>
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
                                                <td colSpan={4} className="text-center py-4 text-gray-500">
                                                    No users found.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* <Pagination page={page} setPage={setPage} totalPages={totalPages} totalUsers={totalUsers} limit={limit} /> */}
                            {/* Pagination */}
                            <Pagination
                                page={page}
                                setPage={setPage}
                                totalUsers={totalUsers}
                                totalPages={totalPages}
                                limit={limit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;