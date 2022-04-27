import React, { useState, useEffect } from 'react';
import FormControl from "@mui/material/FormControl";
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button } from "@mui/material";
import "../investmets.scss";
import {addInvest} from '../../../redux/actions/investments';

const initState = {amt:0, date:new Date(), id:Math.round(new Date().getTime()/1000)}
const GrowInvestComponent = () => {
    const investmentState = useSelector((state)=> state.investments);
    const dispatch = useDispatch();
    const [investObj, setInvestObj] = useState(initState)
    useEffect(()=>{
        console.log('invest:', investObj, investmentState);
    })
    const addAmount = () =>{
        var stringifiedOutput = JSON.stringify(investmentState);

        let newObj =JSON.parse(stringifiedOutput)
        let totalAmt = investObj.amt;
        if(investmentState.growInvestAmt.amtList.length){
            
            investmentState.growInvestAmt.amtList.map((amtData)=>{
                totalAmt += amtData.amt;
            }) 

        } 
        newObj.growInvestAmt.amtList.push(investObj);
        newObj.growInvestAmt.totalAmt = totalAmt;
        console.log('new Obj:', newObj);
        dispatch(addInvest(newObj))
        setInvestObj(initState);
        
    }
    const deleteRow =(index) =>{
        var stringifiedOutput = JSON.stringify(investmentState);
        let newObj =JSON.parse(stringifiedOutput);
        newObj.growInvestAmt.amtList.splice(index, 1)
        console.log('new :', newObj);
        dispatch(addInvest(newObj))


    }
    return (
        <div className='stocks-container'>
            <div style={{ float: "left" }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
                    <TextField type="number" id="standard-basic" label="Invest Amount" variant="standard" value={investObj.amt} onChange={(e)=>{setInvestObj({...investObj, amt:parseInt(e.target.value)})}}/>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
                    <input type="date" className='date-picker'value={investObj.date} onChange={(e)=>{setInvestObj({...investObj, date:e.target.value})}}/>
                </FormControl>
            </div>

            <div style={{ paddingTop: "1rem" }} >
                <Button variant="contained" onClick={()=>{addAmount()}}>
                    ADD
                </Button>
            </div>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Date</th>
                        <th>Invest Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td colSpan={4}>
                            Total Amount : {investmentState.growInvestAmt.totalAmt}
                        </td>

                    </tr>
                    {
                        investmentState.growInvestAmt.amtList.length ? investmentState.growInvestAmt.amtList.map((investment, investIndex) =>{
                            return(
                                <tr key={investIndex}>
                                    <td>{investIndex+1}</td>
                                    <td>{investment.date}</td>
                                    <td>{investment.amt}</td>
                                    <td><button onClick={()=>{deleteRow(investIndex)}}>Delete</button></td>
                                </tr>
                            )
                        }) : ( <tr>
                            <td colSpan={4}>
                                <center>No Data found</center>
                            </td>
                        </tr>)
                        
                    }
                   
                </tbody>
            </table>

        </div>
    )

}
export default GrowInvestComponent;