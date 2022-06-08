import { Row } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cache } from "../../services/cache";
import { Loader, MetaTags } from "../components";
import Redirect from "../components/Redirect";
import { actions } from "../redux";
import { authRoutes, privateRoutes, routes } from "../utils/routes";

const AuthLayout = ({ children }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const { authActions } = actions;

  useEffect(() => {
    // authenticate if its a private route and not authenticated
    if (!isAuthenticated) {
      setIsAuthenticating(true);
      if (cache.checkItem("user")) {
        dispatch(authActions.setUser(cache.getItem("user")));
        dispatch(authActions.setIsAuthenticated(true));
      }
    }
    setIsAuthenticating(false);
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticating ? (
        <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
          <MetaTags title="Loading | AppName" />
          <Loader size="large" text="Authenticating..." />
        </Row>
      ) : isAuthenticated && authRoutes.includes(router.pathname) ? (
        <Redirect to={routes.HOME} />
      ) : isAuthenticated || !privateRoutes.includes(router.pathname) ? (
        children
      ) : (
        <Redirect to={routes.SIGNIN} />
      )}
    </>
  );
};

export default AuthLayout;
