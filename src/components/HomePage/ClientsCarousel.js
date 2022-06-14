import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import Image from "next/image";
const ClientsCarousel = () => {
  let clients = [
    "/images/vodafone.png",
    "/images/tag8-logo.png",
    "/images/deloitte-logo.png",
    "/images/cognizant.png",
    "/images/century-ply-logo.png",
  ];
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      interval={4000}
      transitionTime={500}
      showThumbs={false}
      showIndicators={false}
      centerSlidePercentage={30}
      centerMode={true}
    >
      <div>
        <Image src={clients[0]} height={98} width={77}></Image>
      </div>

      <div>
        <Image src={clients[1]} width={98} height={77}></Image>
      </div>
      <div>
        <Image src={clients[2]} width={98} height={77}></Image>
      </div>
      <div>
        <Image src={clients[3]} width={98} height={77}></Image>
      </div>
      <div>
        <Image src={clients[4]} width={98} height={77}></Image>
      </div>
    </Carousel>
  );
};

export default ClientsCarousel;
