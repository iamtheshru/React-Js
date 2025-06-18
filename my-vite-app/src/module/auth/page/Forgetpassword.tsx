import { useFormik } from "formik";
import * as Yup from "yup";
import type { UserType } from "../auth-user/@type";
import { forgetPassword } from "../auth-user/@service-user";
import { useNavigate, useNavigation } from "react-router-dom";

const Forgetpassword = () => {
    type _forgetType = Pick<UserType, "email">;
    const navigate = useNavigate();

    const forgetpasswordFromik = useFormik<_forgetType>({
        initialValues: {
            email: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Email is required")
        }),
        onSubmit: async (values) => {
            try {
                const submit = await forgetPassword(values);
                console.log(submit);
                navigate("/reset-password");
            } catch (error: any) {
                console.log(error);

            }
            console.log(values);
        }
    });

    const checkError = (field: keyof _forgetType): boolean => {
        return !!(forgetpasswordFromik.touched[field] && forgetpasswordFromik.errors[field]);
    };

    return (
        <div className="max-w-md mx-auto space-y-4">
            <form onSubmit={forgetpasswordFromik.handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        {...forgetpasswordFromik.getFieldProps("email")}
                        className="border p-2 w-full"
                    />
                    {checkError("email") && (
                        <div className="text-red-500">{forgetpasswordFromik.errors.email}</div>
                    )}
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Forgetpassword;
