import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const MyLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MyLayout;
