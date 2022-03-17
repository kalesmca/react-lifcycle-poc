import React from 'react';
import "../../index.css";
import HeaderComponent from './components/header';
import SideBarComponent from './components/sidenav';

import { Routes, Route, Outlet, Link } from "react-router-dom";

const ParentContainer = React.lazy(() => import("../class-component-POC/parent-container-component"));
const CreateInvestmentComponent = React.lazy(() => import("../create/investment"));
const CreateTypeComponent = React.lazy(() => import("../create/investment-type"));
const InvestmentTypeListComponent = React.lazy(() => import("../list/investment-types"));
const InvestmentList = React.lazy(() => import("../list/investmentList"));









const LayoutContainer = (props) => {
  return (
    <div>
      {/* <div>
                

            </div>
            <div>
            </div> */}
      <div className="app">
        <input type="checkbox" id="check" />

        <HeaderComponent />
        <SideBarComponent />
        <Routes>
          <Route index element={<React.Suspense fallback={<>...</>}>
                <ParentContainer />
              </React.Suspense>} />
          <Route path="create-type" element={<React.Suspense fallback={<>...</>}>
                <CreateTypeComponent />
              </React.Suspense>} />
          <Route path="types-list" element={<React.Suspense fallback={<>...</>}>
                <InvestmentTypeListComponent />
              </React.Suspense>} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<React.Suspense fallback={<>...</>}>
                <ParentContainer />
              </React.Suspense>} />
      
      </Routes>



        <div className="container">
          Main Containersss

         
            <Outlet />

        </div>


      </div>
    </div>
  )
}

export default LayoutContainer;