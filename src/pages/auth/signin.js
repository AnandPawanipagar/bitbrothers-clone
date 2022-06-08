import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Button, MetaTags } from "../../components";
import { actions } from "../../redux";
import { routes } from "../../utils/routes";
import { Row, Form, Input } from "antd";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { authActions } = actions;
  const { isSigningIn } = useSelector((state) => state.auth);

  return (
    <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
      <MetaTags title={`Login | AppName`} desc="" keywords="" />
      <Form
        style={{ width: window.innerWidth <= 991 ? "80%" : "30%" }}
        layout="vertical"
        requiredMark={false}
        scrollToFirstError
        onFinish={(values) => dispatch(authActions.handleSignIn(values))}
      >
        <br />
        <h2 className="text-center text-themeColor text-2xl my-8 uppercase font-semibold">
          Signin
        </h2>
        <Form.Item
          name="username"
          label="Email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input size="large" placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password size="large" placeholder="Type password" />
        </Form.Item>
        <Form.Item>
          <Button
            loading={isSigningIn}
            htmlType="submit"
            size="large"
            type="primary"
          >
            Signin
          </Button>
          <div className="text-center my-4 text-base">
            <Link href={routes.SIGNUP}>New user?</Link>
          </div>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default LoginPage;
