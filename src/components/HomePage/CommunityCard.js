import React from "react";

const CommunityCard = () => {
  let cards = [
    {
      img: "text-7xl text-[#808080] icon-Light-Bulb2 text-center mb-6",
      tagline: "Community Consulting ",
      descrpion:
        "We’ll help you define the scope, technology stack, and potential of your solution.",
      learn: (
        <a
          href="https://bitbrothers.in/pages/services/strategic-consulting/"
          className="underline text-[#9664e0]"
        >
          LearnMore
        </a>
      ),
    },
    {
      img: "text-7xl text-[#808080] icon-Text-Box text-center mb-6",
      tagline: "Community as a Service (CaaS)",
      descrpion:
        "We bring expertise in all stages of design, from research to polished prototypes.",
      learn: (
        <a
          href="https://bitbrothers.in/pages/services/user-experience"
          className="underline text-[#9664e0]"
        >
          LearnMore
        </a>
      ),
    },
    {
      img: "text-7xl text-[#808080] icon-Clouds text-center mb-6",
      tagline: "Developer Outreach",
      descrpion:
        "We have experience in cloud infrastructure services, design patterns, and strategies.",
      learn: (
        <a
          href="https://bitbrothers.in/pages/services/cloud-services/"
          className="underline text-[#9664e0]"
        >
          LearnMore
        </a>
      ),
    },
  ];

  return (
    <>
      <div className="grid overflow-hidden grid-cols-3 grid-rows-1 gap-8">
        {cards.map((card) => {
          //   max-w-sm w-full lg:max-w-full lg:flex
          return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col content-center flex-wrap border-2 border-[#ECF0F1] px-4 py-4">
              <div className={card.img}></div>
              <div className="text-center font-[500] text-xl text-[#252525]">
                {card.tagline}
              </div>
              <p className="text-center font-normal text-base mt-4">
                {card.descrpion}
              </p>
              <p className="text-center font-normal text-base mt-6">
                {card.learn}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-10"></div>
      <div className="flex justify-center">
        <div className="max-w-sm rounded overflow-hidden  flex flex-col content-center flex-wrap border-2 border-[#ECF0F1] px-4 py-4">
          <div className="text-7xl text-[#808080] icon-Mail-3 text-center mb-6"></div>
          <div className="text-center font-[500] text-xl text-[#252525]">
            Community Auditors
          </div>
          <p className="text-center font-normal text-base mt-4">
            We serve as liaisons combining your product vision with our
            technical teams’ excellent expertise.
          </p>
          <p className="text-center font-normal text-base mt-6">
            {" "}
            <a
              href="https://bitbrothers.in/pages/services/project-management/"
              className="underline text-[#9664e0]"
            >
              LearnMore
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
