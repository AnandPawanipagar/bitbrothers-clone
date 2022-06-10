import React from "react";

const CommunityCard = () => {
  let cards = [
    {
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
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col content-center flex-wrap">
              <div className="text-center font-normal text-xl">
                {card.tagline}
              </div>
              <p className="text-center font-normal text-base">
                {card.descrpion}
              </p>
              <p className="text-center font-normal text-base">{card.learn}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-10"></div>
      <div className="flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col content-center flex-wrap">
          <div className="text-center font-normal text-xl">
            Community Auditors
          </div>
          <p className="text-center font-normal text-base">
            We serve as liaisons combining your product vision with our
            technical teams’ expertise.
          </p>
          <p className="text-center font-normal text-base">
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
