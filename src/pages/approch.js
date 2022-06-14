import React from "react";
import styles from "../styles/Home.module.css";
import { OurApproach, Discover } from "../components";

const Approch = () => {
  return (
    <div className={styles.containerMargin}>
      <OurApproach />
      <Discover />
    </div>
  );
};

export default Approch;
