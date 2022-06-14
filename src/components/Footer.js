import React from "react";

const Footer = () => {
  return (
    <div className="  grid overflow-hidden grid-cols-4 grid-rows-1 gap-8  bg-[#252525] pt-28  pl-[15em] pr-[15em] pb-6">
      <p className="text-[#ffffff]  text-justify leading-6 ">
        We at Bit Brothers are a small global team of seasoned product managers,
        data scientists, data engineers, developers, and designers, ready to
        help you build your data, web, and mobile needs.
      </p>
      <div className="flex flex-col leading-8 ">
        <p>
          <a href="" className="text-[#ffffff]">
            Our Approach
          </a>
        </p>
        <p>
          <a href="" className="text-[#ffffff]">
            Manifesto
          </a>
        </p>
        <p>
          <a href="" className="text-[#ffffff]">
            Terms of service
          </a>
        </p>
      </div>
      <div className="flex flex-col leading-8 ">
        <p>
          <a href="" className="text-[#ffffff]">
            Strategic Consulting
          </a>
        </p>
        <p>
          <a href="" className="text-[#ffffff]">
            User Experience
          </a>
        </p>
        <p>
          <a href="" className="text-[#ffffff]">
            Cloud Services
          </a>
        </p>
        <p>
          <a href="" className="text-[#ffffff]">
            Project Management
          </a>
        </p>
      </div>
      <div className="flex flex-col leading-8">
        <p>
          <a href="" className="text-[#ffffff]">
            Web Development
          </a>
        </p>
        <p>
          <a href="" className="text-[#ffffff]">
            Mobile Development
          </a>
        </p>
        <p>
          <a href="" className="text-[#ffffff]">
            Quality Assurance
          </a>
        </p>
        <p>
          <a href="" className="text-[#ffffff]">
            Continuation Engineering
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
