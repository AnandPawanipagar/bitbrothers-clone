import React from "react";

const ScannerToRoadCards = () => {
  let cards = [
    {
      tagline: "Discovery & Definition ",
      descrpion:
        "Discovery and definition is everything just shy of actual development — things like defining the initial scope, ideation, requirements gathering, and consultation.",
    },
    {
      tagline: "Support & Maintenance",
      descrpion:
        "Our customizable service model gives you options like 24-hour support, quality assurance, DevOps, and project management.",
    },
    {
      tagline: "Staff Augmentation",
      descrpion:
        "Think of us as an extension of your current development capabilities. We’ll integrate into your organization and scale as your needs grow.",
    },
    {
      tagline: "Time Based Project Work",
      descrpion:
        "You define, we deliver. From initial scope through final implementation and beyond, we offer a one-stop development solution.",
    },
  ];

  return (
    <div className="grid overflow-hidden grid-cols-4 grid-rows-1 gap-8 ">
      {cards.map((card) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow border-2 border-[#ECF0F1] px-4 py-4  flex flex-col content-center flex-wrap ">
            <div className="text-center font-normal text-xl">
              {card.tagline}
            </div>
            <p className="text-center font-normal text-base mt-4 ">
              {card.descrpion}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ScannerToRoadCards;
