import "antd/dist/antd.css";
import "../styles/globals.css";
import React from "react";
import { store } from "../redux";
import { Provider } from "react-redux";
import { AuthLayout } from "../layouts";
import MyLayout from "../components/MyLayout";
const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AuthLayout>
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
      </AuthLayout>
    </Provider>
  );
};

export default App;
