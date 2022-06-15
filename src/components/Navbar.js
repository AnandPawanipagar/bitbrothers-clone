import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between ml-[15em] mb-16 mr-[15em] py-2 top-0 left-0 right-0  bg-fixed ">
      <Image
        className="bg-cover"
        src="/images/bitbrothers-logo-text.png "
        width={118}
        height={40}
      ></Image>
      <div className="flex flex-row items-center">
        <div className="mr-6 uppercase opacity-50 hover:opacity-[100] font-semibold">
          <Link href="/approch">approach</Link>
        </div>
        <div className="mr-6 ml-6 uppercase opacity-50 hover:opacity-[100] font-semibold">
          <Link href="/services">services</Link>
        </div>
        <div className="ml-6 uppercase opacity-50 hover:opacity-[100] font-semibold">
          <Link href="/manifesto">manifesto</Link>
        </div>
        <button
          type="button"
          className=" font-bold text-sm rounded ml-6 w-fit flex items-center bg-[#b689f8] text-white px-8 h-[36px] hover:bg-[#BB8FCE] opacity-200 "
        >
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Navbar;
