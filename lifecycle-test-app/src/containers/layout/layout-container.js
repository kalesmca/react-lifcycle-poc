import React from 'react';
import HeaderComponent from './components/header';
import SideBarComponent from './components/sidenav';
import CustomerListComponent from '../customer-list/list-component';
import CreateCustomerComponent from '../create-customer/create-component';
import ParentContainer from '../class-component-POC/parent-container-component';

import "../../index.css";

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