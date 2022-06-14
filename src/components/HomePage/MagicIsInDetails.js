import React from "react";
import Image from "next/image";

const MagicIsInDetails = () => {
  return (
    <div className="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 text-justify" >
      <Image src="/images/reading_lady.png" width={555} height={555}></Image>
      <div className="flex flex-col">
        <div className="text-[2.35em] font-normal text-[#252525]">Magic is in the details</div>
        <div className="text-[1.35em] leading-[1.68em] font-noraml text-[#808080] mt-6 text-justify">
          Our Team Members have worked in world-class tech and product
          companies. We are built on strong fundamentals of operational
          excellence, robust tech infrastructure, and delivery – while adopting
          an{" "}
          <a href="https://bitbrothers.in/pages/always-in-beta/">
            <span className="text-[#9664e0] hover:text-[#8b59d7] underline " >‘always in beta’</span>
          </a>{" "}
          mentality exploring the latest technologies and interrogating every
          detail. Craft is hidden in all those wonderful little parts. “Le bon
          dieu est dans le détail” as they say in French.
        </div>
      </div>
    </div>
  );
};

export default MagicIsInDetails;
