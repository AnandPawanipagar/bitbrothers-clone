import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const MapDevelopment = () => {
  const firstList = [
    "Market Segmentation",
    "Competitive Analysis",
    "Architecture Consulting",
  ];
  const secondList = ["Code Analysis", "Monitoring", "Server Maintenance"];

  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-10 w-auto mb-10">
      <div className=" col-start-auto col-span-1 bg-[#29dde5]"></div>
      <div className=" col-span-2 mt-12 mb-12">
        <div className="flex flex-col items-start ">
          <FontAwesomeIcon icon={faCoffee} />
          <div className="text-[2.35em] text-[#252525] font-[400]">
            Map Development to Business Opportunity
          </div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Define the investment potential, technology stack, timeline, total
            cost of ownership and the ongoing maintenance required to launch and
            sustain a solution. Before beginning re-architecture or new
            development, we customize consulting engagements to examine your
            code base, align on current challenge areas and explore how to
            mitigate risks associated with leveraging existing code.
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <ul className="ml-5">
              {firstList.map((li) => {
                return (
                  <li className="list-[square] text-[1.35em] font-normal text-[#808080] leading-[1.68em]">
                    {li}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="lg:mr-[12em]">
              {secondList.map((li) => {
                return (
                  <li className="list-[square] text-[1.35em] font-normal text-[#808080] leading-[1.68em]">
                    {li}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDevelopment;
