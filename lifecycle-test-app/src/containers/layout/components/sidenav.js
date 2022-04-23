import React from 'react';
import "../../../index.css";
import {Link } from "react-router-dom";

const SideBarComponent = (props) =>{
    return (
        <div className="sidebar">
                    <center>
                        <div>Cockpit</div>
                    </center>
                    <Link to="/"><i className="fas fa-home"></i><span>ParentContainer</span></Link>
                    <Link to="/create-type"><i className="fas fa-star"></i><span>Create</span></Link>
                    <Link to="/invest-type-list"><i className="fas fa-star"></i><span>Invest-type-list</span></Link>

                    <Link to="/types-list"><i className="fas fa-chart-line"></i><span>List</span></Link>
                    <Link to="/investments"><i className="fas fa-chart-line"></i><span>Investments</span></Link>

                    {/* <a href="#"><i className="fas fa-address-card"></i><span>360 Feature</span></a>
                    <a href="#"><i className="fas fa-chart-line"></i><span>Customers</span></a>
                    <a href="#"><i className="fab fa-amazon-pay"></i><span>Drag</span></a>
                    <a href="#"><i className="fas fa-star"></i><span>List</span></a> */}
                </div>
    )
}

export default SideBarComponent;