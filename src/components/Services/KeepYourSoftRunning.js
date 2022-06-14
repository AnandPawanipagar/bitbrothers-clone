import React from "react";

const KeepYourSoftRunning = () => {
  const firstList = ["Production Support", "Application Support"];
  const secondList = [
    "24/7/365 After Hours Support",
    "Time-Specific After Hours Support",
  ];

  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-10 w-auto mb-[8em]">
      <div className=" col-start-auto col-span-1 bg-[#29dde5]"></div>
      <div className=" col-span-2 mt-12 mb-12">
        <div className="flex flex-col items-start ">
          <div className="text-[2.35em] text-[#252525] font-[400]">
            Keep Your Software Running At Its Best
          </div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Today’s software is never truly finished — the days of the “Golden
            Master” are long gone. No matter how solid a piece of software is,
            bugs are inevitable. It’s also likely that you’ll want to release
            some updates and add new features down the road. Continuation
            Engineering ensures your software remains supported, maintained, and
            enhanced well after it launches. We offer three different support
            models: Production, Application, and After Hours. Production Support
            includes systems administration and database maintenance.
            Application Support covers a multitude of disciplines like Python,
            Javascript, QA, iOS, and Android. Both of these models include
            ongoing Management and Project Management. Whether you need 24-hour
            support or just a few additional hours of coverage, our After Hours
            model means issues are addressed as they happen, rather than waiting
            for the next workday to start.
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

export default KeepYourSoftRunning;
