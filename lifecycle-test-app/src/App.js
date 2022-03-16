import React from "react";
import { BrowserRouter } from "react-router-dom";
import LayoutContainer from './containers/layout/layout-container';

import './index.css'

const App = () => {
  return (
    <BrowserRouter >
      <div className="w-100">
        <LayoutContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
