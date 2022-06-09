import { Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Navbar,
  UnreasonableTagLine,
  StunningPDText,
} from "../components";
import { actions } from "../redux";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Home = () => {
  // const { user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const { authActions } = actions;

  return (
    <>
      <div className={styles.containerMargin}>
        <Navbar></Navbar>
        {/* <div className="mt-8"></div> */}
        <UnreasonableTagLine />
        <div className="flex justify-center">
          <Image src="/big_building.png" width={2000} height={1040}></Image>
        </div>
        <div className="mt-16"></div>
        <StunningPDText />
      </div>
    </>

    // <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
    //   <Col>
    //     <h1 className="text-3xl">
    //       Welcome, <span className="font-semibold">{user?.name}</span>
    //     </h1>
    //     <br />
    //     <Button
    //       className="w-fit m-auto"
    //       onClick={() => dispatch(authActions.handleSignOut())}
    //     >
    //       Logout
    //     </Button>
    //   </Col>
    // </Row>
  );
};

export default Home;
