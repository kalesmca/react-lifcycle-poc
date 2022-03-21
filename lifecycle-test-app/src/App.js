import React,{useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import LayoutContainer from './containers/layout/layout-container';
import {dark} from './config/constants';

import './index.css'

const App = () => {
  useEffect(()=>{
    document.documentElement.style.setProperty('--primaryColor', dark.primaryColor);
    document.documentElement.style.setProperty('--secondaryColor', dark.secondaryColor);
    document.documentElement.style.setProperty('--textColor', dark.textColor);
  })
  return (
    <BrowserRouter >
      <div className="w-100">
        <LayoutContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
