import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import {useSelector, useDispatch} from 'react-redux'
import {addStockData} from '../../../redux/actions/investmentTypes';
import { TextField,  Button } from "@mui/material";


export default function StockListComponent() {
  const dispatch = useDispatch();
  const investConstData = useSelector((state)=> state.investConstData);
  const stockList = investConstData.investTypes[0].stockList;
  const [newStockName, setNewStock] = useState("");
  console.log('investtype ::', investConstData);

  const addStock = () =>{
    const newStock = {
        stockName: newStockName,
        stockId: Math.round(new Date().getTime()/1000),
        createDate: new Date()  
    }
    investConstData.investTypes[0].stockList.push(newStock);
    setNewStock("")


      dispatch(addStockData(investConstData))
  }
  return (
    <div className="stocks-container">
     
      <div style={{ float: "left" }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
            <TextField id="standard-basic" label="Stock-Name" variant="standard" value={newStockName} onChange={(e)=>{setNewStock(e.target.value)}}/>
        </FormControl>
      </div>

      <div style={{ paddingTop: "1rem" }} >
        <Button variant="contained" onClick={() => { addStock()}} disabled={!newStockName}>
          ADD
        </Button>
      </div>

        <div>
          <table id="customers">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Start_Date</th>
                <th>Stock Name</th>
                
              </tr>
            </thead>
            <tbody>
                {
                    stockList.length ? 
                        stockList.map((stock, stockIndex)=>{
                            return(<tr key={stockIndex}>
                                <td >
                                  {stockIndex +1}
                                </td>
                                <td>{stock.stockName}</td>
                                <td>{stock.createDate}</td>
                              </tr>)
                        })

                    :(<tr>
                        <td colSpan={3}>
                          <center>No Data found</center>
                        </td>
                      </tr>)
                }
              
            </tbody>
          </table>
        </div>
     
     
      
    </div>
  );
}
