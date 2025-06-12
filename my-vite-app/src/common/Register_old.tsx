import React, { useState } from "react";
import { Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../module/auth/auth-user/@service-user";
import ErrorAlert from "./ui/Error";

const RegisterForm = () => {
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [showmessege, setShowMessege] = useState<boolean | null>(null)

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required").min(3, "Minimum 3 characters"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().required("Password is required").min(6, "Minimum 6 characters"),
        }),
        onSubmit: async (values: string, { resetForm, setSubmitting }) => {
            try {
                await registerUser(values);
                setErrorMsg("Registration successful!"); // Clear error if success
                // alert("Registration successful!");
                setShowMessege(true);
                resetForm();
            } catch (error) {
                setErrorMsg(error?.response?.data?.message || "Something went wrong during registration.");
                setShowMessege(false);
            } finally {
                setSubmitting(false);
            }
        },
    });

    // const handleErrorDetail = () => {
    //     console.error("Full error detail:", errorMsg);
    // };

    return (
        <div className="max-w-md mx-auto space-y-4">
            {errorMsg && (
                <ErrorAlert
                    message={errorMsg}
                    showmessege={showmessege}
                    // onDetailClick={handleErrorDetail}
                    onClose={() => setErrorMsg("")}
                />
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        className="border p-2 w-full"
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div className="text-red-500">{formik.errors.username}</div>
                    )}
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className="border p-2 w-full"
                    />
                    {formik.touched.email && formik.errors.email && (
                        <div className="text-red-500">{formik.errors.email}</div>
                    )}
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className="border p-2 w-full"
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500">{formik.errors.password}</div>
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
    );
};

export default RegisterForm;
