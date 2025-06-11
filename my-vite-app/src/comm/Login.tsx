import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
    const userDatas = useSelector((state: any) => state.userdata[0]);
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required").min(3, "Minimum 3 characters"),
        password: Yup.string().required("Password is required").min(3, "Minimum 3 characters")
    });

    const formik = useFormik({
        initialValues: {
            username: userDatas?.Admin || "",
            password: userDatas?.Password || ""
        },
        validationSchema,
        onSubmit: (values) => {
            console.log("Submitted", values);
            navigate("/dashboard");
        }
    });

    return (
        <div className="p-8 border bg-red-300 max-w-md mx-auto mt-10">
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="p-2 border rounded w-96"
                />
                {formik.touched.username && formik.errors.username && (
                    <div className="text-red-600 text-sm">{formik.errors.username}</div>
                )}

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="p-2 border rounded w-96"
                />
                {formik.touched.password && formik.errors.password && (
                    <div className="text-red-600 text-sm">{formik.errors.password}</div>
                )}

                <button type="submit" className="bg-blue-600 p-2 rounded w-auto text-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
