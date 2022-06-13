import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
const FeedbackCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      interval={8000}
      transitionTime={1000}
      showThumbs={false}
      showIndicators={true}
    >
      <div className="flex flex-col">
        <p className="mb-[1.04em] italic font-serif font-light text-[1.78571429em] text-[#666666]   ">
          "Love the way the team works. Their impressive technical proficiency,
          proactive work ethic, and understanding of the lean model help them
          integrate with the in-house team. The team accommodates requests and
          remains focused on the client’s needs."
        </p>
        <span className="font-bold text-[1.0em] text-[#252525] leading-8">
          Vivek Chaudhary
        </span>
        <span className="text-[1.0em] font-normal text-[#666666] ">
          Sr Manager, Deloitte Digital
        </span>
      </div>
      <div className="flex flex-col mb-[8.0em]">
        <p className="mb-[1.04em] italic font-serif font-light text-[1.78571429em] text-[#666666] ">
          "Very impressed with the level of details and research the team put
          together and quick response time to each project."
        </p>
        <span className="font-bold text-[1.0em] text-[#252525] leading-8">
          Rohan Menezes
        </span>
        <span className="text-[1.0em] font-normal text-[#666666] ">
          COO, Bank of America
        </span>
      </div>

    </Carousel>
  );
};

export default FeedbackCarousel;
