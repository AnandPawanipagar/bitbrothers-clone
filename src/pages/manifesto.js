import React from "react";
import {
  OurManifesto,
  WhatDrivesUs,
  OneAndZeroCards,
  LookingForTalent,
} from "../components";
const manifesto = () => {
  return (
    <div className="ml-[15em] mr-[15em]">
      <OurManifesto />
      <WhatDrivesUs />
      <OneAndZeroCards />
      <LookingForTalent />
    </div>
  );
};

export default manifesto;
