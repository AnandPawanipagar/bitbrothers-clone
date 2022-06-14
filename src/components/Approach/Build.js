import React from "react";

const Build = () => {
  const firstList = [
    "You don’t have your own team but need a turn-key solution",
    " Your team is too busy to take on additional projects",
    "You have preset goals and need a team to meet them",
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
          <div className="text-[2.35em] text-[#252525] font-[400]">Build</div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Our project-based work is best summed up in four words: You define,
            we deliver. Tell us your goals and what you’re hoping to achieve and
            we’ll make it so. It’s really that simple. From initial scope all
            the way through to final implementation and beyond, we offer a
            one-stop development solution that runs the gamut of scope and
            industry.
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

export default Build;
