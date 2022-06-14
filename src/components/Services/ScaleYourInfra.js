import React from "react";

const ScaleYourInfra = () => {
  const firstList = [
    "Strategy Consulting",
    "Cloud Solution Architecture",
    "Distributed Applications Implementation",
    "Cloud Native Development",
  ];
  const secondList = [
    "  Application & Data Migration",
    "Serverless Application Development",
    " DevOps Planning & CI/CD Automation",
    " Data Analytics Implementation",
  ];

  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-10 w-auto mb-10">
      <div className=" col-start-auto col-span-1 bg-[#29dde5]"></div>
      <div className=" col-span-2 mt-12 mb-12">
        <div className="flex flex-col items-start ">
          <div className="text-[2.35em] text-[#252525] font-[400]">
            Scale Your Infrastructure
          </div>
          <p className="mt-6 mb-6 text-[1.35em] font-normal text-[#808080] leading-[1.68em] text-start text-justify">
            Our DevOps Team brings over years of experience working with cloud
            infrastructure services, cloud design patterns and strategies to
            maximize benefits of solutions hosted and built for the cloud.
            Shorten time to develop and launch new solutions, modernize legacy
            technology or test and deploy prototypes with IaaS-based
            applications on Amazon Web Services, Microsoft Azure or Google
            Cloud.
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
            <ul className="lg:mr-[2em]">
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

export default ScaleYourInfra;
