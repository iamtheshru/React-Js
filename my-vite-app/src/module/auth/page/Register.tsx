import { Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../auth-user/@service-user";
import ErrorAlert from "../../../common/ui/Error";
import { useState } from "react";

const initialValues = {
    username: "",
    email: "",
    password: "",
};

const validationSchema = Yup.object({
    username: Yup.string()
        .min(3, "Minimum 3 characters")
        .max(50, "Maximum 50 characters")
        .required("Username is required"),
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
    const [errorMsg, setErrorMsg] = useState<string>("");
    const [showmessege, setShowmessege] = useState<boolean | null>(null);
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                await registerUser(values);
                // alert("Registration successful!");
                setErrorMsg("Success");
                setShowmessege(true);
                resetForm();
            } catch (error) {
                setErrorMsg("Error");
                setShowmessege(false);
                // alert("Registration failed!");
                console.error(error);
            }
        },
    });

    return (
        <div className="max-w-md mx-auto space-y-4">
            {errorMsg && (
                <ErrorAlert
                    message={errorMsg}
                    showmessege={showmessege}
                    onClose={() => setErrorMsg("")} />
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

export default Register;
