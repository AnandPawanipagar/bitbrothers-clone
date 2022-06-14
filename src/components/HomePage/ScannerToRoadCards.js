import React from "react";

const ScannerToRoadCards = () => {
  let cards = [
    {img:"icon-Magnifi-Glass2 text-7xl text-[#808080] mb-6 text-center",
      tagline: "Discovery & Definition ",
      descrpion:
        "Discovery and definition is everything just shy of actual development — things like defining the initial scope, ideation, requirements gathering, and consultation.",
    },
    {img:"icon-Preview text-7xl text-[#808080] mb-6 text-center",
      tagline: "Support & Maintenance",
      descrpion:
        "Our customizable service model gives you options like 24-hour support, quality assurance, DevOps, and project management.",
    },
    {img:"icon-Pen text-7xl text-[#808080] mb-6 text-center",
      tagline: "Staff Augmentation",
      descrpion:
        "Think of us as an extension of your current development capabilities. We’ll integrate into your organization and scale as your needs grow.",
    },
    {img:"icon-Road-3 text-7xl text-[#808080] mb-6 text-center",
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
            <div className={card.img}></div>
            <div className="text-center font-bold text-[1.0em]">
              {card.tagline}
            </div>
            <p className="text-center font-[400] text-[1.0em] mt-2 leading-[1.85em] ">
              {card.descrpion}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ScannerToRoadCards;
