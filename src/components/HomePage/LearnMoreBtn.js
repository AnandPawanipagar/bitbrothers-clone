import React from "react";
import Link from "next/link";
const LearnMoreBtn = () => {
  return (
    <Link href="/approch">
      <div className="flex justify-center">
        <button
          type="button"
          className=" font-bold text-sm rounded ml-6 w-fit flex items-center bg-[#b689f8] text-white px-8 h-[36px] hover:bg-[#BB8FCE] opacity-200 "
        >
          Learn More
        </button>
      </div>
    </Link>
  );
};

export default LearnMoreBtn;
