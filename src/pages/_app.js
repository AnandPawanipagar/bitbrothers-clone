import "antd/dist/antd.css";
import "../styles/globals.css";
import React from "react";
import store from "../redux/store";
import { Provider } from "react-redux";
import MyLayout from "../components/MyLayout";
const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    </Provider>
  );
};

export default App;
