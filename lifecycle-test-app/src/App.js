import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import LayoutContainer from "./containers/layout/layout-container";
import { dark } from "./config/constants";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";

const App = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primaryColor",
      dark.primaryColor
    );
    document.documentElement.style.setProperty(
      "--secondaryColor",
      dark.secondaryColor
    );
    document.documentElement.style.setProperty("--textColor", dark.textColor);
  });
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="w-100">
          <LayoutContainer />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
