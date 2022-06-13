import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //
import Image from "next/image";
const ClientsCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      interval={2500}
      transitionTime={1000}
      showThumbs={false}
      
    >
      <div>
        {/* <Image
          src="/images/bitbrothers-logo-text.png "
          height={100}
          width={200}
        ></Image> */}
        hello
      </div>
      <div>
        {/* <Image src="/images/steps_3people.png" width={555} height={555}></Image> */}
        hello2
      </div>
    </Carousel>
  );
};

export default ClientsCarousel;
