import React from "react";

const ElevateYourSofEng = () => {
  const firstList = [
    "User Research",
    " Information Architecture",
    " Wireframing",
    "Prototyping",
  ];
  const secondList = [
    "Visual Design",
    "Usability Testing",
    " Heuristic Review",
    "Production Support",
  ];

  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-10 w-auto mb-10">
      <div className=" col-start-auto col-span-1 bg-[#29dde5]"></div>
      <div className=" col-span-2 mt-12 mb-12">
        <div className="flex flex-col items-start ">
          <div className="text-[2.35em] text-[#252525] font-[400]">
            Elevate Your Software Experience
          </div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Able to lead the creation of the user experience or execute it
            through visual design, we bring expertise in all stages from
            proof-of-concept prototyping to complete mobile/web solution
            transformation. Advocates of participatory design, we collaborate
            with your team on stakeholder interviews, usability testing,
            task/decision flows, wireframes and clickable prototypes to align
            with the complex interdependencies presented by modern businesses.
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

export default ElevateYourSofEng;
