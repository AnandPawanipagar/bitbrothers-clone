import { Col, Row } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Navbar } from "../components";
import { actions } from "../redux";
import styles from "../styles/Home.module.css";

const Home = () => {
  // const { user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const { authActions } = actions;

  return (
    <>
      <div className={styles.containerMargin}>
        <Navbar></Navbar>
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
