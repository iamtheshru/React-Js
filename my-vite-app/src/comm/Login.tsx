import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const userDatas = useSelector((state: any) => state.userdata[0]);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: userDatas?.Admin || "",
            password: userDatas?.Password || ""
        },
        onSubmit: (values) => {
            console.log("Submitted", values);
            navigate("/dashboard")
        }
    });

    return (
        <div className="p-8 border bg-red-300 max-w-md mx-auto mt-10">
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    // value={formik.values.username}
                    onChange={formik.handleChange}
                    className="p-2 border rounded w-96"
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    // value={formik.values.password}
                    onChange={formik.handleChange}
                    className="p-2 border rounded w-96"
                />

                <button type="submit" className="bg-blue-600 p-2 rounded w-auto text-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
