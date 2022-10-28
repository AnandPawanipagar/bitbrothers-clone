import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementNum } from "../../redux/actions";
const HappyClientsToProjDepCards = () => {
  const myState = useSelector((state) => state.increment);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(incrementNum());
    }, 1000);
  }, []);

  let cards = [
    {
      img: "icon-Heart text-5xl text-[#b689f8] ",
      value: "100+",
      valTitle: "HAPPY CLIENTS",
    },
    {
      img: "icon-Light-Bulb text-5xl text-[#b689f8]",
      value: "7+",
      valTitle: "YEARS IN BUSINESS",
    },
    {
      img: "icon-Add-SpaceAfterParagraph text-5xl text-[#b689f8]",
      value: "10k+",
      valTitle: "AUDITED COMMITS",
    },
    {
      img: "icon-Paper-Plane text-5xl text-[#b689f8]",
      value: "100+",
      valTitle: "PROJECT DEPLOYED",
    },
  ];
  return (
    <div className="grid overflow-hidden grid-cols-4 grid-rows-1 gap-8 ">
      {cards.map((card) => {
        return (
          <div className="flex justify-center w-max-sm rounded overflow-hidden shadow border-2 border-[#ECF0F1] px-4 py-4 ">
            <div className="flex flex-col justify-center">
              <div className={card.img}></div>
            </div>
            <div className="mx-4"></div>
            <div className="flex flex-col justify-center ">
              <div className="text-3xl font-bold text-[#b689f8]">
                {card.value}
              </div>
              <div className="text-xs font-bold uppercase text-[#666666] mt-2">
                {card.valTitle}
              </div>
            </div>
            <div> {myState}</div>
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
