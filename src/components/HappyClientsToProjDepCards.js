import React from "react";

const HappyClientsToProjDepCards = () => {
  let cards = [
    { img: "img1", value: "100+", valTitle: "HAPPY CLIENTS" },
    { img: "img2", value: "7+", valTitle: "YEARS IN BUSINESS" },
    { img: "img3", value: "10k+", valTitle: "AUDITED COMMITS" },
    { img: "img4", value: "100+", valTitle: "PROJECT DEPLOYED" },
  ];
  return (
    <div className="grid overflow-hidden grid-cols-4 grid-rows-1 gap-8 ">
      {cards.map((card) => {
        return (
          <div className="flex justify-center w-max-sm rounded overflow-hidden shadow border-2 border-[#ECF0F1] px-4 py-4 ">
            <div>{card.img}</div>
            <div className="mx-4"></div>
            <div className="flex flex-col justify-center ">
              <div className="text-3xl font-bold text-[#b689f8]">
                {card.value}
              </div>
              <div className="text-xs font-bold uppercase text-[#666666] mt-2">
                {card.valTitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    // <div className="flex w-fit rounded overflow-hidden shadow border-2 border-[#ECF0F1] px-4 py-4 ">
    //   <div>img1</div>
    //   <div className="mx-4"></div>
    //   <div className="flex flex-col">
    //     <div className="text-3xl font-bold text-[#b689f8]">100+</div>
    //     <div className="text-xs font-bold uppercase text-[#666666] mt-2">
    //       Happy Clients
    //     </div>
    //   </div>
    // </div>
  );
};

export default HappyClientsToProjDepCards;
