import React,{useEffect} from 'react';
import "../../../index.css";
import {Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getCustomerList} from '../../../redux/actions/customers'

import staticData from '../../../data/application_data.json';



const HeaderComponent = (props) =>{
    const appState = useSelector((state)=> state)
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log('static Data:', staticData, appState);
        // dispatch(getCustomerList())
    },[])

    return (
        <header className="header-container">
                    <label htmlFor="check" id="">
                        <i className="fas fa-bars" id="sidebar-btn"></i>
                    </label>
                    <div className="header-left">
                        <span><h3>Kalees-Sundari</h3></span>
                        {/* {
                           appState.customers?.customerList?.map((customer, cusIndex)=>{
                               return(
                                   <span key={cusIndex}>{customer.name}</span>
                               )
                           }) 
                        } */}

                    </div>
                    <div className="header-right">
                    <Link to="/profile"><i className="fa fa-user" style={{color:"white", marginRight:"20px"}}></i></Link>
                        <a className="logout-btn">logout</a>
                        
                    </div>

                </header>
    )
}

export default HeaderComponent;