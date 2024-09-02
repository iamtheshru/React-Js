import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { FormValidation } from "./FormValidation.jsx";
function Contact() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormValidation()),
    mode: "onChange",
  });

  const submitHandler = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
        service: data?.service,
        messageData: data?.messageData,
      });
      alert("Succesfully Data added");
      reset();
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <section id="contact" className="container mx-auto px-4">
        <div className="  flex flex-col flex-wrap  items-center justify-center mt-8 pt-5 mb-4 mx-1">
          <div className="text-black font-serif font-bold text-2xl  md:text-3xl py-2">
            <h2>
              <span className="com-textcolor">Contact </span>Us
            </h2>
          </div>
          <div className=" w-10/12  hover:shadow-lg form_shadow rounded  ">
            <h3 className="px-5 py-3 font-semibold">Fillup The Form</h3>
            <div className="border-b-2 border-slate-100"></div>
            <form
              className=" mx-auto"
              onSubmit={handleSubmit(submitHandler)}
            >
              <div className=" flex flex-col md:flex lg:flex-row items-center w-full justify-center">
                <Controller
                  name="name"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <>
                      <div className=" p-3 w-full md:px-3 md:py-3 relative">
                        <label className="block Contact_span text-sm py-2">
                          {" "}
                          Name*
                        </label>

                        <input
                          type="name"
                          id="name"
                          className="Contact_input w-full py-3 rounded md:w-full md:px-3  "
                          {...field}
                          placeholder="Name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-red-600 text-xs left-0 top-10">
                            {errors?.name?.message}
                          </p>
                        )}

                      </div>
                    </>
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <div className="p-3 w-full md:px-3 md:py-3">
                      <label className="block Contact_span text-sm  py-2">
                        {" "}
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="Contact_input w-full  py-3 rounded md:w-full md:px-3"
                        {...field}
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-600 text-xs">
                          {errors?.email?.message}
                        </p>
                      )}
                    </div>
                  )}
                />

              </div>
              <div className=" flex flex-col md:flex lg:flex-row items-center w-full justify-center">
                <Controller
                  name="phone"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <div className=" p-3 w-full md:px-3 md:py-3">
                      <label className="block Contact_span text-sm py-2">
                        {" "}
                        Phone*
                      </label>
                      <input
                        type="number"
                        id="phone"
                        className="Contact_input w-full  py-3 rounded md:w-full md:px-3 "
                        placeholder="Mobile Number"
                        {...field}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-red-600 text-xs">
                          {errors?.phone?.message}
                        </p>
                      )}
                    </div>

                  )}
                />

                <Controller
                  name="service"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <div className="p-3  w-full md:px-3 md:py-2">
                      <label className="block Contact_span text-sm  py-2">
                        {" "}
                        Service*
                      </label>
                      <input
                        type="service"
                        id="service"
                        className="Contact_input w-full  py-3 rounded md:w-full md:px-3"
                        placeholder="Service"
                        {...field}
                      />
                      {errors.service && (
                        <p className="mt-1 text-red-600 text-xs">
                          {errors?.service?.message}
                        </p>
                      )}
                    </div>
                  )}
                />

              </div>

              <Controller
                name="messageData"
                control={control}
                defaultValue={""}
                render={({ field }) => (
                  <>
                    <div className="p-3  w-full">
                      <label className="block Contact_span text-sm py-2">
                        {" "}
                        Message*
                      </label>
                      <textarea
                        type="messageData"
                        id="messageData"
                        placeholder="Type your message"
                        rows={"5"}
                        className="Contact_input block w-full rounded"
                        {...field}
                      />
                      {errors?.messageData && (
                        <p className="mt-1 text-red-600 text-xs">
                          {errors?.messageData?.message}
                        </p>
                      )}
                    </div>
                  </>
                )}
              />

              <div className="p-3  w-full mb-5">
                <input
                  type="submit"
                  className="text-white com-bg px-6 py-2 rounded-sm cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
