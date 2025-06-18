import { Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { registerUser } from "../auth-user/@service-user";
import { ErrorSuccess, ErrorAlert } from "../../../common/ui/Error";
import type { UserType } from "../auth-user/@type";

type RegisterType = Pick<UserType, "name" | "email" | "password">;

const initialValues: RegisterType = {
    name: "",
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, "Minimum 3 characters")
        .max(50, "Maximum 50 characters")
        .required("Name is required"),
    email: Yup.string()
        .email("Invalid email format")
        .min(3, "Minimum 3 characters")
        .max(50, "Maximum 50 characters")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Minimum 3 characters")
        .max(50, "Maximum 50 characters")
        .required("Password is required"),
});

const Register = () => {
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                await registerUser(values);
                setSuccess("Registered successfully!");
                resetForm();
            } catch (error: any) {
                setErrorMsg(error?.message || "Registration failed!");
            }
        },
    });

    const checkError = (field: keyof RegisterType) => {
        return !!(formik.touched[field] && formik.errors[field]);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6 space-y-5">
                {errorMsg && <ErrorAlert message={errorMsg} onClose={() => setErrorMsg(null)} />}
                {success && <ErrorSuccess message={success} onClose={() => setSuccess(null)} />}

                <h2 className="text-2xl font-semibold text-center text-gray-700">Create an Account</h2>

                <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {checkError("name") && (
                            <div className="text-red-500 text-sm">{formik.errors.name}</div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {checkError("email") && (
                            <div className="text-red-500 text-sm">{formik.errors.email}</div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {checkError("password") && (
                            <div className="text-red-500 text-sm">{formik.errors.password}</div>
                        )}
                    </div>

                    <Button
                        htmlType="submit"
                        type="primary"
                        loading={formik.isSubmitting}
                        className="w-full"
                    >
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;
