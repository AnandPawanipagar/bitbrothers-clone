import React from "react";

const Support = () => {
  const firstList = [
    "You need on-going support after your software launches",
    " You have limited internal support abilities",
    "You need after-hours support for your software",
  ];
  const secondList = [
    "Project Manager",
    "SysAdmin",
    "Database Management",
    "On-Call Staffing",
    "Quality Assurance",
    "Account Manager",
    "Dedicated Development Support",
  ];

  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-10 w-auto mb-[14em]">
      <div className=" col-start-auto col-span-1 bg-[#b689f8]"></div>
      <div className=" col-span-2 mt-12 mb-12">
        <div className="flex flex-col items-start ">
          <div className="text-[2.35em] text-[#252525] font-[400]">Support</div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Worried you’ll miss us after your project wraps? Well, fear not. We
            offer a customizable service model that keeps us in touch and your
            software supported after launch. 24-hour support, quality assurance,
            DevOps, project management — choose only the services you need when
            you need them.
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

export default Support;
