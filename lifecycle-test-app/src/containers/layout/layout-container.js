import React from 'react';
import HeaderComponent from './components/header';
import SideBarComponent from './components/sidenav';
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
            
      </div>


            </div>
        </div>
    )
}

export default LayoutContainer;