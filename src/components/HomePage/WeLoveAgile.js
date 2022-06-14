import React from "react";
import Image from "next/image";
const WeLoveAgile = () => {
  return (
    <div className="grid overflow-hidden grid-cols-2 grid-rows-1 gap-2 text-justify">
      <div className="flex flex-col">
        <div className="text-[2.35em] font-normal text-[#252525]">We love Agile</div>
        <div className="text-[1.35em] font-normal text-[#808080] mt-6 text-justify leading-[1.68em]">
          After many years of using agile methodologies on hundreds of projects,
          we at Bit Brothers have used that experience to mold what we call{" "}
          <a href="https://bitbrothers.in/pages/adaptable-agile/">
            <span className="text-[#9664e0] hover:underline">
              Adaptable Agile
            </span>
          </a>{" "}
          . The Adaptable Agile Methodology solves software problems faster by
          combining a bespoke, flexible approach to craft development and
          continuous team interaction. We leave clean, responsive code behind
          with your team leveled up in both processes and new technology.
        </div>
      </div>
      <Image src="/images/steps_3people.png" width={555} height={555}></Image>
    </div>
  );
};

export default WeLoveAgile;
