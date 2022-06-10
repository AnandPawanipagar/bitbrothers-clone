import React from "react";
import {
  Navbar,
  UnreasonableTagLine,
  StunningPDText,
  MagicIsInDetails,
  WeLoveAgile,
  TransparencyAndIntegrity,
  ScopeOfDomain,
  CommunityCard,
} from "../components";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className={styles.containerMargin}>
        <Navbar></Navbar>
        <UnreasonableTagLine />
        <div className="flex justify-center">
          <Image
            src="/images/big_building.png"
            width={2000}
            height={1040}
          ></Image>
        </div>
        <div className="mt-16"></div>
        <StunningPDText />
        <div className="mt-16"></div>
        <MagicIsInDetails />
        <div className="mt-10"></div>
        <WeLoveAgile />
        <div className="mt-10"></div>
        <TransparencyAndIntegrity />
        <div className="mt-10"></div>
        <ScopeOfDomain />
        <div className="mt-10"></div>
        <CommunityCard />
      </div>
    </>
  );
};

export default Home;
