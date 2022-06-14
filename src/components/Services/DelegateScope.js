import React from "react";

const DelegateScope = () => {
  const firstList = [
    "Requirements Documentation",
    "Feature Definition",
    "Feature Prioritization",
    "Roadmap Creation",
  ];
  const secondList = [
    "User Story Composition",
    "Backlog Grooming",
    "Sprint Leadership",
    "Resource Management",
  ];

  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-10 w-auto mb-10">
      <div className=" col-start-auto col-span-1 bg-[#29dde5]"></div>
      <div className=" col-span-2 mt-12 mb-12">
        <div className="flex flex-col items-start ">
          <div className="text-[2.35em] text-[#252525] font-[400]">
            Delegate Scope, Schedule and Spend Tracking
          </div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Experts in Agile software development, our project managers,
            business analysts, and certified scrum masters serve as liaisons
            combining your product vision with the domain expertise of our
            technical team. As your point-of-contact and resource coordinators,
            our project managers map the scope of your software build, forecast
            progress and break tasks into managed releases that align with
            schedule and project cost goals. With transparency at the forefront,
            you are continuously involved as your product develops.
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

export default DelegateScope;
