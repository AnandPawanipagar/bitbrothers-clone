import React from "react";
import { useForm } from "react-hook-form";
const Contact = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => {
  //   console.log("data is saved");
  // };
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
      <form
      // onSubmit={handleSubmit(onSubmit)}
      >
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
            <input className="border-[##D0D3D4] px-1 py-1 border-2 rounded mt-1" />
          </div>
          <div className="flex flex-col">
            <label className="font-[400]">Phone:</label>
            <input className="border-[##D0D3D4] px-1 py-1 border-2 rounded mt-1" />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="font-[400]">About Project:</label>
            <textarea className="border-[##D0D3D4] px-1 py-1 border-2 rounded mt-1 "></textarea>
          </div>
          <div className="flex col-span-2 items-center ">
            <input
              type="checkbox"
              classname=" appearance-none checked:bg-blue-500  border-[#B3B6B7] "
            />
            <p className="ml-3">
              By filling in the form, you agree to our Privacy Policy, including
              our cookie use.
            </p>
          </div>
          <div className="col-span-2">
            <button
              type="button"
              className=" font-bold text-sm rounded  w-auto flex items-center bg-[#b689f8] text-white px-8 h-[36px] hover:bg-[#BB8FCE] opacity-200 "
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
