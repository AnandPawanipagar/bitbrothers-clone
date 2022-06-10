import React from "react";

const DailyStandUpToSprintCycles = () => {
  let components = [
    { value: "12K+", title: "DAILY STANDUPS" },
    { value: "12K+", title: "USER STORIES" },
    { value: "12K+", title: "SPRINT CYCLES" },
  ];
  return (
    <div className="flex justify-center space-x-9 ">
      {components.map((component) => {
        return (
          <div className="flex space-x-2  ">
            <div className="font-bold text-sm text-[#b689f8]">{component.value}</div>
            <div className="font-bold text-sm">{component.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DailyStandUpToSprintCycles;
