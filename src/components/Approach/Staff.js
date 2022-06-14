import React from "react";

const Staff = () => {
  const firstList = [
    "You’re having trouble hiring or retaining development staff",
    " You don’t want to distract your existing in-house team with new projects",
    "You need to scale fast and can’t wait around for a lengthy hiring process",
  ];
  const secondList = [
    "Project Manager",
    "Scrum Master",
    "UI/UX Designert",
    "Practice Lead",
    "Development Specialist",
    "Quality Assurance Analyst",
    "Account Manager",
  ];

  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-10 w-auto mb-10">
      <div className=" col-start-auto col-span-1 bg-[#b689f8]"></div>
      <div className=" col-span-2 mt-12 mb-12">
        <div className="flex flex-col items-start ">
          <div className="text-[2.35em] text-[#252525] font-[400]">Staff</div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Think of us as an extension of your current development
            capabilities. We can supplement your existing team or build one from
            scratch just for you. We’ll remotely integrate into your
            organization and scale with you as your needs grow. You don’t even
            need to invite us to your company party. Although, we probably
            wouldn’t turn down the offer.
          </p>
          <h4 className="text-[1.35em] font-[500] mb-2">Perfect When:</h4>
          <ul className="ml-10">
            {firstList.map((li) => {
              return (
                <li className="list-[square] text-[1.35em] font-normal text-[#808080] leading-[1.68em]">
                  {li}
                </li>
              );
            })}
          </ul>
          <h4 className="text-[1.35em] font-[500] mb-2 mt-6">
            Assemble Your Team:
          </h4>
          <ul className="ml-10">
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
  );
};

export default Staff;
