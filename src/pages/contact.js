import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const Contact = () => {
  return (
    <div className="ml-[15em] mr-[15em]">
      <div className="flex flex-col items-center  ">
        <div className="text-[3.14em] text-[#252525] font-[400]">
          Let’s talk about your project
        </div>
        <p className="mt-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-center ml-[13em] mr-[13em] ">
          Make your first contact via the form below to talk more about your
          project or idea.
        </p>
      </div>
      <div className="mt-[15em]"></div>

      <Formik
        initialValues={{ email: "" }}
        // onSubmit={async (values) => {
        //   await new Promise((resolve) => setTimeout(resolve, 500));
        //   alert(JSON.stringify(values, null, 2));
        // }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Required"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-4  ml-[10em] mr-[10em] border-[##D0D3D4] px-6 py-10 border-2 rounded">
                <div className="flex flex-col ">
                  <label className="font-[400]"> Name:</label>
                  <input className=" border-[##D0D3D4] px-1 py-1 border-2 rounded mt-1" />
                </div>
                <div className="flex flex-col">
                  <label className="font-[400]">Company:</label>
                  <input className="border-[##D0D3D4] px-1 py-1 border-2 rounded mt-1" />
                </div>
                <div className="flex flex-col">
                  <label className="font-[400]">Email Address:</label>
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    className={`  border-[##D0D3D4] px-1 py-1 border-2 rounded mt-1 ${
                      errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }`}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col">
                  <label className="font-[400]">Phone:</label>
                  <input className="border-[##D0D3D4] px-1 py-1 border-2 rounded mt-1" />
                </div>
                <div className="flex flex-col col-span-2">
                  <label className="font-[400]">About Project:</label>
                  <textarea className="border-[##D0D3D4] px-1 py-1 border-2 rounded mt-1 "></textarea>
                </div>
                <div className="flex col-span-2 items-center mt-4">
                  <input
                    type="checkbox"
                    classname=" appearance-none checked:bg-blue-500  border-[#B3B6B7] "
                  />
                  <p className="ml-3">
                    By filling in the form, you agree to our Privacy Policy,
                    including our cookie use.
                  </p>
                </div>

                <button
                  type="submit"
                  
                  className=" font-bold text-sm rounded  w-[100%] flex items-center bg-[#b689f8] text-white px-8 h-[36px] hover:bg-[#BB8FCE] opacity-200 justify-center  col-span-2 mt-8"
                >
                  GET IN TOUCH
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Contact;
