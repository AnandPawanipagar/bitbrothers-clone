import React from "react";

const LookingForTalent = () => {
  return (
    <div className="flex flex-col items-center lg:mx-[12em] mt-[12em]">
      <div className="text-[2.35em] font-noraml">
        We’re always looking for talent
      </div>
      <p className="mt-6 font-normal text-[#808080] text-[1.35em] leading-[1.68em] text-center">
        Got what it takes to work with us? Great! Send us a link to your resumé
        or portfolio to become part of our talent pool.
      </p>
      <button
        type="button"
        className=" font-bold text-sm rounded ml-6 w-fit flex items-center bg-[#b689f8] text-white px-8 h-[36px] hover:bg-[#BB8FCE] opacity-200 mt-[3em] "
      >
        SEE JOB OPENINGS
      </button>
    </div>
  );
};

export default LookingForTalent;
