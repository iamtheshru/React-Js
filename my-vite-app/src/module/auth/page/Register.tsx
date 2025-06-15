import { Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerUser } from "../auth-user/@service-user";
import { useState } from "react";
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
        .required("name is required"),
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
                // const formData = new FormData();
                // formData.append("name", values.name);
                // formData.append("email", values.email);
                // formData.append("password", values.password);
                await registerUser(values);
                setSuccess("Success");
                resetForm();
            } catch (error: any) {
                setErrorMsg(error.message)
            }
        },
    });

    const checkError = (filed: keyof RegisterType): boolean => {
        return !!(formik.touched[filed] && formik.errors[filed])
    }

    return (
        <div className="max-w-md mx-auto space-y-4">
            {errorMsg && (
                <ErrorAlert message={errorMsg} onClose={() => setErrorMsg(null)} />
            )}

            {success && (
                <ErrorSuccess message={success} onClose={() => setSuccess(null)} />
            )}

            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <label>name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className="border p-2 w-full"
                    />
                    {checkError("name") && (
                        <div className="text-red-500">{formik.errors.name}</div>
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
                    {checkError("email") && (
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
                    {checkError("password") && (
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
