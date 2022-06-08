import React from "react";
import { Result, Row } from "antd";
import { Button, MetaTags } from "../../components";
import { routes } from "../../utils/routes";

const VerifyEmail = () => {
  return (
    <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
      <MetaTags title={`Verify Email | AppName`} desc="" keywords="" />
      <Result
        status="success"
        title="Verification mail sent!"
        subTitle="We have sent a verification mail to the email you have used to register. Please check your inbox to verify your account and continue."
        extra={
          <div className="flex items-center justify-around">
            <a rel="noreferrer" href="https://mail.google.com" target="_blank">
              <Button className="max-w-[250px]" icon="mail">
                Check Mailbox
              </Button>
            </a>
            <Button link={routes.LOGIN} className="max-w-[250px]" icon="check">
              I have verified
            </Button>
          </div>
        }
      />
    </Row>
  );
};

export default VerifyEmail;
