import React from "react";
import Image from "next/image";
import Link from "next/link";
import approch from "../pages/approch";
const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between mt-2 ">
      <Image src="/bitbrothers-logo-text.png " width={118} height={40}></Image>
      <div className="flex flex-row items-center">
        <div className="mr-6 uppercase opacity-50 hover:opacity-[100] font-semibold">
          <Link href="/approch">approch</Link>
        </div>
        <div className="mr-6 ml-6 uppercase opacity-50 hover:opacity-[100] font-semibold">
          <Link href="/services">services</Link>
        </div>
        <div className="ml-6 uppercase opacity-50 hover:opacity-[100] font-semibold">
          <Link href="/manifesto">manifesto</Link>
        </div>
        <button
          type="button"
          className=" rounded ml-6 w-full flex items-center bg-[#b689f8] text-white px-8 h-[36px] hover:bg-[#BB8FCE] opacity-200 "
        >
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default Navbar;
