import React from "react";

const ReachUsers = () => {
  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-10 w-auto mb-10">
      <div className=" col-start-auto col-span-1 bg-[#29dde5]"></div>
      <div className=" col-span-2 mt-12 mb-12">
        <div className="flex flex-col items-start ">
          <div className="text-[2.35em] text-[#252525] font-[400]">
            Reach Users Across Platforms
          </div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Custom web development offers options for businesses that seek to
            provide a flexible, consistent experience for users across
            platforms. Leveraging new approaches to web development including
            progressive web apps, we bring front-end, back-end and architecture
            ability together to deliver on your business need and maximize
            delivery speed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReachUsers;
