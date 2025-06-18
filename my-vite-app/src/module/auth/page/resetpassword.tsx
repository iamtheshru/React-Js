import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { resetpassword } from "../auth-user/@service-user";

const ResetPassword = () => {
    const { token } = useParams();
    console.log(token);


    const formik = useFormik({
        initialValues: {
            newPassword: "",
        },
        validationSchema: Yup.object({
            newPassword: Yup.string().required("Password is required"),
        }),
        onSubmit: async (values) => {
            try {
                if (!token) throw new Error("Token is missing from URL");
                const res = await resetpassword({ newPassword: values.newPassword, token });
                console.log(res); // Show success
            } catch (error: any) {
                console.log("Error:", error.message);
            }
        },
    });

    const checkError = (field: keyof typeof formik.values): boolean =>
        !!(formik.touched[field] && formik.errors[field]);

    return (
        <div className="max-w-md mx-auto space-y-4 mt-10">
            <h2 className="text-xl font-bold text-center">Reset Your Password</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">New Password</label>
                    <input
                        type="password"
                        {...formik.getFieldProps("newPassword")}
                        className="border p-2 w-full"
                    />
                    {checkError("newPassword") && (
                        <div className="text-red-500">{formik.errors.newPassword}</div>
                    )}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Reset Password
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
