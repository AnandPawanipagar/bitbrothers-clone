import React from "react";

const LetsTalkAYP = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="text-4xl">Let’s talk about your product.</div>
      <p className="mt-6 font-normal text-[#808080] text-xl text-center">
        Let’s take your digital experiences to the next level.
      </p>
      <button
        type="button"
        className=" bg-gradient-to-r from-[#29dde5] to-[#b689f8] font-bold text-sm rounded ml-6 w-fit flex items-center bg-[#b689f8] text-white px-8 h-[36px] opacity-200 mt-8 hover:from-[#b689f8] hover:to-[#29dde5] "
      >
        GET IN TOUCH
      </button>
    </div>
  );
};

export default LetsTalkAYP;
