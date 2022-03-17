import React from 'react';
import "../../index.css";
import HeaderComponent from './components/header';
import SideBarComponent from './components/sidenav';
// import CustomerListComponent from '../customer-list/list-component';
// import CreateCustomerComponent from '../create-customer/create-component';
// import ParentContainer from '../class-component-POC/parent-container-component';
import { Routes, Route, Outlet, Link } from "react-router-dom";
const CreateCustomerComponent = React.lazy(() => import("../create-customer/create-component"));
const CustomerListComponent = React.lazy(() => import("../customer-list/list-component"));
const ParentContainer = React.lazy(() => import("../class-component-POC/parent-container-component"));




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

                

                <div className="container">
                    Main Containersss

                    {/* <CreateCustomerComponent />
                    <CustomerListComponent /> */}

                    <ParentContainer />
            
      </div>


            </div>
        </div>
    )
}

export default LayoutContainer;