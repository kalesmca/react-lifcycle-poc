


import React, { useState, useEffect } from 'react';
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button } from "@mui/material";
import "../investmets.scss";
import {addInvest} from '../../../redux/actions/investments';
import {investSummaryModal} from '../investmentModal';

const InvestmentSummaryComponent = () => {
    const investmentState = useSelector((state)=> state.investments);
    const dispatch = useDispatch();
    const [summaryObj, setSummaryObj] = useState(investSummaryModal)
    useEffect(()=>{
        console.log('invest:', summaryObj, investmentState);
    })
    const addAmount = () =>{
       
        
    }
    const deleteRow =(index) =>{
      
    }
    return (
        <div className='stocks-container'>
            <div style={{ float: "left" }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100, maxWidth: 100 }}>
                    <input type="date" className='date-picker'/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100, maxWidth: 100 }}>
                    <TextField id="standard-basic" label="TMB Deposits" variant="standard" />
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField id="standard-basic" label="ICICI Deposits" variant="standard" />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField id="standard-basic" label="SCB Deposits" variant="standard" />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField id="standard-basic" label="Equtas Deposits" variant="standard" />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField id="standard-basic" label="SBI Deposits" variant="standard" />
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField id="standard-basic" label="TMB -account" variant="standard" />
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField id="standard-basic" label="ICICI -account" variant="standard" />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField id="standard-basic" label="SCB -account" variant="standard" />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField id="standard-basic" label="Equtas -account" variant="standard" />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField id="standard-basic" label="SBI -account" variant="standard" />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField id="standard-basic" label="Muthu Chitfund" variant="standard" />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField id="standard-basic" label="Bala Chitfund" variant="standard" />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField id="standard-basic" label="Stock-Current" variant="standard" />
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField id="standard-basic" label="Mutual-Current" variant="standard" />
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField id="standard-basic" label="Sundari-account" variant="standard" />
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField id="standard-basic" label="Sundari-stocks" variant="standard" />
                </FormControl>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <Button variant="contained" onClick={()=>{addAmount()}}>
                        ADD
                    </Button>                
                </FormControl>
                
                
            </div>

            
            <table className="invest-summary">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Date</th>
                        <th>TMB Deposits</th>
                        <th>ICICI Deposits</th>
                        <th>SCB Deposits</th>
                        <th>SBI Deposits</th>
                        <th>Equtas Deposits</th>
                        <th>TMB Acc</th>
                        <th>SCB Acc</th>
                        <th>ICICI Acc</th>
                        <th>SBI Acc</th>
                        <th>Equtas Acc</th>
                        <th>Bala Chit</th>
                        <th>Muthu Chit</th>
                        <th>Stocks</th>
                        <th>Mutual</th>
                        <th>Sundari-Acc</th>
                        <th>Sundari-Invest</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td colSpan={19}>
                            Total Amount : {investmentState.growInvestAmt.totalAmt}
                        </td>

                    </tr>
                   
                   
                </tbody>
            </table>

        </div>
    )

}
export default InvestmentSummaryComponent;