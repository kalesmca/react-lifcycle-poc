import React from 'react';
import "../../../index.css";
import {Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const HeaderComponent = (props) =>{
    const appState = useSelector((state)=> state)
    console.log('appState : ', appState);
    return (
        <header className="header-container">
                    <label htmlFor="check" id="">
                        <i className="fas fa-bars" id="sidebar-btn"></i>
                    </label>
                    <div className="header-left">
                        <span><h3>RMWB-Cockpit</h3></span>

                    </div>
                    <div className="header-right">
                    <Link to="/profile"><i className="fa fa-user" style={{color:"white", marginRight:"20px"}}></i></Link>
                        <a className="logout-btn">logout</a>
                        
                    </div>

                </header>
    )
}

export default HeaderComponent;