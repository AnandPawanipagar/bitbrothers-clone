import React from "react";
import {
  UnreasonableTagLine,
  StunningPDText,
  MagicIsInDetails,
  WeLoveAgile,
  TransparencyAndIntegrity,
  ScopeOfDomain,
  CommunityCard,
  TrustedParter,
  DiscoverHowWeDeliver,
  ScannerToRoadCards,
  LearnMoreBtn,
  HappyClientsToProjDepCards,
  DailyStandUpToSprintCycles,
  LetsTalkAYP,
  ClientsCarousel,
  FeedbackCarousel,
} from "../components";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className={styles.containerMargin}>
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
        <div className="mt-12"></div>
        <TransparencyAndIntegrity />
        <div className="mt-12"></div>
        <ScopeOfDomain />
        <div className="mt-20"></div>
        <CommunityCard />
        <div className="mt-20"></div>
        <TrustedParter />
        <div className="mt-20"></div>
        <DiscoverHowWeDeliver />
        <div className="mt-20"></div>
        <ScannerToRoadCards />
        <div className="mt-20"></div>
        <LearnMoreBtn />
        <div className="mt-20"></div>
        <HappyClientsToProjDepCards />
        <div className="mt-20"></div>
        <DailyStandUpToSprintCycles />
        <div className="mt-20"></div>
        <LetsTalkAYP />
        <div className="mt-20"></div>
        <ClientsCarousel />
        <FeedbackCarousel />
      </div>
      <div className="mt-20"></div>
    </>
  );
};

export default Home;
