import * as Yup from "yup";
export const FormValidation = () => {
  return Yup.object().shape({
    name: Yup.string()
      ?.trim()
      .required("Enter your first name")
      .test(
        "len",
        "Min 2 characters required",
        (val) => val && val.toString().length >= 2
      ),

    phone: Yup.string()
      .required("Enter Mobile Number")
      //   .matches(phoneRegExp, "Mobile number can be 10 digits only")
      .min(10, "Min 10 characters required")
      .max(10, "Max 10 characters required"),

    email: Yup.string()
      ?.trim()
      .email("Please Enter Valid Email")
      .required("Enter Your Email"),

    service: Yup.string()
      ?.trim()
      .required("Enter your service")
      .test(
        "len",
        "Min 2 characters required",
        (val) => val && val.toString().length >= 2
      ),
    messageData: Yup.string()
      ?.trim()
      .required("Enter your message")
      .test(
        "len",
        "Min 10 characters required",
        (val) => val && val.toString().length >= 2
      ),
  });
};
