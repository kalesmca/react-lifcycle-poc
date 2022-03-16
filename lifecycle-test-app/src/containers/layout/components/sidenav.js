import React from 'react';
import "../../../index.css";

const SideBarComponent = (props) =>{
    return (
        <div className="sidebar">
                    <center>
                        <div>Cockpit</div>
                    </center>
                    <a href="#"><i class="fas fa-home"></i><span>Dashboard</span></a>
                    <a href="#"><i class="fas fa-address-card"></i><span>360 Feature</span></a>
                    <a href="#"><i class="fas fa-chart-line"></i><span>Customers</span></a>
                    <a href="#"><i class="fab fa-amazon-pay"></i><span>Drag</span></a>
                    <a href="#"><i class="fas fa-star"></i><span>List</span></a>
                </div>
    )
}

export default SideBarComponent;