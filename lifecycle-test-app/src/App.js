import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import LayoutContainer from "./containers/layout/layout-container";
import { dark } from "./config/constants";
import { Provider } from "react-redux";
import store from "./redux/store";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { green, purple } from '@mui/material/colors';

import "./index.css";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
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
        <MuiThemeProvider theme={theme}>
          <div className="w-100">
            <LayoutContainer />
          </div>
        </MuiThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
