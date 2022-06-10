import React from "react";

const Footer = () => {
  return (
    <div className="grid overflow-hidden grid-cols-4 grid-rows-1 gap-8  bg-[black]">
      <p className="text-[white]">
        We at Bit Brothers are a small global team of seasoned product managers,
        data scientists, data engineers, developers, and designers, ready to
        help you build your data, web, and mobile needs.
      </p>
      <div className="flex flex-col ">
        <p>
          <a href="" className="text-[white]">
            Our Approach
          </a>
        </p>
        <p>
          <a href="" className="text-[white]">
            Manifesto
          </a>
        </p>
        <p>
          <a href="" className="text-[white]">
            Terms of service
          </a>
        </p>
      </div>
      <div className="flex flex-col ">
        <p>
          <a href="" className="text-[white]">
            Strategic Consulting
          </a>
        </p>
        <p>
          <a href="" className="text-[white]">
            User Experience
          </a>
        </p>
        <p>
          <a href="" className="text-[white]">
            Cloud Services
          </a>
        </p>
        <p>
          <a href="" className="text-[white]">
            Project Management
          </a>
        </p>
      </div>
      <div className="flex flex-col ">
        <p>
          <a href="" className="text-[white]">
            Web Development
          </a>
        </p>
        <p>
          <a href="" className="text-[white]">
            Mobile Development
          </a>
        </p>
        <p>
          <a href="" className="text-[white]">
            Quality Assurance
          </a>
        </p>
        <p>
          <a href="" className="text-[white]">
            Continuation Engineering
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
