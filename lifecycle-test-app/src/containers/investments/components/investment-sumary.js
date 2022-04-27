


import React, { useState, useEffect } from 'react';
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button } from "@mui/material";
import "../investmets.scss";
import {addInvest} from '../../../redux/actions/investments';
import {investSummaryModal} from '../investmentModal';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Icon from '@mui/material/Icon';



const InvestmentSummaryComponent = () => {
    const investmentState = useSelector((state)=> state.investments);
    const dispatch = useDispatch();
    const [summaryObj, setSummaryObj] = useState(investSummaryModal)
    useEffect(()=>{
        console.log('invest:', summaryObj, investmentState);
    })
    const addAmount = () =>{
        var stringifiedOutput = JSON.stringify(investmentState);

        let newObj =JSON.parse(stringifiedOutput)
        // setSummaryObj({...summaryObj, totalAmt: summaryObj.balaChit + summaryObj.equtAcc + summaryObj.equtDeposit + summaryObj.iciciAcc + summaryObj.iciciDeposit + summaryObj.muthuChit + summaryObj.mutualFund + summaryObj.sbiAcc + summaryObj.sbiDeposit + summaryObj.scbAcc + summaryObj.scbDeposit + summaryObj.stockCurrent + summaryObj.sundariAcc + summaryObj.sundariInves + summaryObj.tmbAcc + summaryObj.tmbDeposit })
        let total = 0;
        for (let key in summaryObj) {
            if(key != 'id' && key != 'date' && key != 'totalAmt'){
                total += summaryObj[key] ? parseInt(summaryObj[key]) : 0
            }
          }
          console.log('total:', total)
          setSummaryObj({...summaryObj, totalAmt: total})
          newObj.month_summary.summaryList.push({...summaryObj, totalAmt: total});
          dispatch(addInvest(newObj))

          setSummaryObj(investSummaryModal);
          console.log('new obj:', newObj)
        
    }
    const deleteRow =(index) =>{
        var stringifiedOutput = JSON.stringify(investmentState);
        let newObj =JSON.parse(stringifiedOutput);
        newObj.month_summary.summaryList.splice(index, 1)
        console.log('new :', newObj);
        dispatch(addInvest(newObj))
    }
    return (
        <div className='stocks-container'>
            <div style={{ float: "left" }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100, maxWidth: 100 }} >
                    <input type="date" className='date-picker' value={summaryObj.date} onChange={(e)=>{setSummaryObj({...summaryObj, date: e.target.value})}}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100, maxWidth: 100 }}>
                    <TextField type="number" id="standard-basic" label="TMB Deposits" variant="standard" value={summaryObj.tmbDeposit} onChange={(e)=>{setSummaryObj({...summaryObj, tmbDeposit: parseInt(e.target.value)})}}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField type="number" id="standard-basic" label="ICICI Deposits" variant="standard" value={summaryObj.iciciDeposit} onChange={(e)=>{setSummaryObj({...summaryObj, iciciDeposit: parseInt(e.target.value)})}}/>
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField type="number" id="standard-basic" label="SCB Deposits" variant="standard" value={summaryObj.scbDeposit} onChange={(e)=>{setSummaryObj({...summaryObj, scbDeposit: parseInt(e.target.value)})}}/>
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField type="number" id="standard-basic" label="Equtas Deposits" variant="standard" value={summaryObj.equtDeposit} onChange={(e)=>{setSummaryObj({...summaryObj, equtDeposit: parseInt(e.target.value)})}}/>
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField type="number" id="standard-basic" label="SBI Deposits" variant="standard" value={summaryObj.sbiDeposit} onChange={(e)=>{setSummaryObj({...summaryObj, sbiDeposit: parseInt(e.target.value)})}}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField type="number" id="standard-basic" label="TMB -account" variant="standard" value={summaryObj.tmbAcc} onChange={(e)=>{setSummaryObj({...summaryObj, tmbAcc: parseInt(e.target.value)})}}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField type="number" id="standard-basic" label="ICICI -account" variant="standard" value={summaryObj.iciciAcc} onChange={(e)=>{setSummaryObj({...summaryObj, iciciAcc: parseInt(e.target.value)})}}/>
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField type="number" id="standard-basic" label="SCB -account" variant="standard" value={summaryObj.scbAcc} onChange={(e)=>{setSummaryObj({...summaryObj, scbAcc: parseInt(e.target.value)})}}/>
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField type="number" id="standard-basic" label="Equtas -account" variant="standard" value={summaryObj.equtAcc} onChange={(e)=>{setSummaryObj({...summaryObj, equtAcc: parseInt(e.target.value)})}} />
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField type="number" id="standard-basic" label="SBI -account" variant="standard" value={summaryObj.sbiAcc} onChange={(e)=>{setSummaryObj({...summaryObj, sbiAcc: parseInt(e.target.value)})}}/>
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField type="number" id="standard-basic" label="Muthu Chitfund" variant="standard" value={summaryObj.muthuChit} onChange={(e)=>{setSummaryObj({...summaryObj, muthuChit: parseInt(e.target.value)})}}/>
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField type="number" id="standard-basic" label="Bala Chitfund" variant="standard" value={summaryObj.balaChit} onChange={(e)=>{setSummaryObj({...summaryObj, balaChit: parseInt(e.target.value)})}}/>
                </FormControl>
                
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField type="number" id="standard-basic" label="Stock-Current" variant="standard" value={summaryObj.stockCurrent} onChange={(e)=>{setSummaryObj({...summaryObj, stockCurrent: parseInt(e.target.value)})}}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100,maxWidth: 100 }}>
                    <TextField type="number" id="standard-basic" label="Mutual-Current" variant="standard" value={summaryObj.mutualFund} onChange={(e)=>{setSummaryObj({...summaryObj, mutualFund: parseInt(e.target.value)})}}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField type="number" id="standard-basic" label="Sundari-account" variant="standard" value={summaryObj.sundariAcc} onChange={(e)=>{setSummaryObj({...summaryObj, sundariAcc: parseInt(e.target.value)})}}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 100 ,maxWidth: 100}}>
                    <TextField type="number" id="standard-basic" label="Sundari-investment" variant="standard" value={summaryObj.sundariInves} onChange={(e)=>{setSummaryObj({...summaryObj, sundariInves: parseInt(e.target.value)})}}/>
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
                        <th>      <Icon baseClassName="fas" className="fa-plus-circle" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        investmentState.month_summary.summaryList.length ? investmentState.month_summary.summaryList.map((summary, summaryIndex) =>{
                            return(
                            <tr key={summaryIndex}>
                                {/* <td>kalees</td> */}
                                {
                                   Object.keys(summary).map((key) => {
                                      return (
                                           <td>{summary[key]} </td>
                                       )
                                  })
                                }
                                <td>
                                <IconButton aria-label="delete">
                                    <DeleteIcon onClick={()=>{deleteRow(summaryIndex)}} />
                                </IconButton>
                                </td>

                            </tr>
                            )

                        }) : (<td colSpan={20}>
                           <center>No Data Found</center> 
                        </td>)

                        
                    }
                   
                   
                </tbody>
            </table>

        </div>
    )

}
export default InvestmentSummaryComponent;