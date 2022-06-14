import React from "react";

const Discover = () => {
  const firstList = [
    "You don’t have clear goals",
    " You need a proof of concept for testing or stakeholder buy-in",
    "You’re not totally sure what you want",
  ];
  const secondList = [
    "Project Manager",
    "Enterprise Consultants",
    "Solutions Architect",
    "UI/UX Designer",
    "Development Support",
  ];

  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-10 w-auto ">
      <div className=" col-start-auto col-span-1 bg-[#b689f8]"></div>
      <div className=" col-span-2 mt-12 mb-12">
        <div className="flex flex-col items-start ">
          <div className="text-[2.35em] text-[#252525] font-[400]">
            Discover
          </div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Discovery is everything just shy of actual development. It’s the
            down and dirty stuff like initial scope, ideation, requirements
            gathering, and consultation. These critical steps act as a blueprint
            for the rest of your project. After Discovery, we can either hand
            things off to your development team or assemble one just for you.
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
          <h4 className="text-[1.35em] font-[500] mb-2 mt-6">Assemble Your Team:</h4>
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

export default Discover;
