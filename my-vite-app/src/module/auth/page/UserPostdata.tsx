import type { UserType } from "../auth-user/@type"
import { useFormik } from "formik"
import * as Yup from "yup";
import { postUser } from "../auth-user/@service-user";

type Props = {
    setUserData: React.Dispatch<React.SetStateAction<UserType[]>>,
    setEditUserData: React.Dispatch<React.SetStateAction<UserType | null>>;
    editUserData: UserType | null;
}

const UserPostdata = ({ setUserData, setEditUserData, editUserData }: Props) => {
    type _postuser = Pick<UserType, "name" | "password" | "email">


    const postFormik = useFormik<_postuser>({
        initialValues: {
            name: editUserData?.name || "",
            password: "",
            email: editUserData?.email || "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, "Minimum 3 characters").max(50, "miximum 50 characters").required("name is required."),
            password: Yup.string().min(3, "Minimum 3 characters").max(50, "miximum 50 characters").required("Password is required."),
            email: Yup.string().required("email is required.")
        }),
        onSubmit: async (values, { resetForm }) => {

            try {
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("password", values.password);
                formData.append("email", values.email);
                for (let [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                }
                console.log("formdata", formData);
                const res = await postUser(formData);
                setUserData((prev) => [...prev, res.data]);
                alert("success");
                resetForm();
            } catch (error: any) {
                console.log("userpost", error);
            }
        }
    });

    const checkError = (file: keyof _postuser): boolean => {
        return !!(postFormik.touched[file] && postFormik.errors[file]);
    }
    return (
        <>
            <div>
                <form onSubmit={postFormik.handleSubmit}>
                    <div>
                        <label>User Name</label>
                        <input type="text"  {...postFormik.getFieldProps("name")} />
                        {checkError("name") && <p>{postFormik.errors.name}</p>}
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password"  {...postFormik.getFieldProps("password")} />
                        {checkError("password") && <p>{postFormik.errors.password}</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"  {...postFormik.getFieldProps("email")} />
                        {checkError("email") && <p>{postFormik.errors.email}</p>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default UserPostdata
