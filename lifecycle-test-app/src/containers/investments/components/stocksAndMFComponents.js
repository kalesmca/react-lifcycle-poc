import React, { useState } from "react";
import "../investmets.scss";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { InvestmentList } from "../../../constants/config";
import { TextField, Box, Button } from "@mui/material";
import CreateInvestmentComponent from './create-investment-modal';

import {useSelector, useDispatch} from 'react-redux';
export default function StocksAndMFComponents() {
  // const FundTypes = ["STOCKS", "MUTUAL-FUND"];
  const investConstDataState = useSelector((state)=> state.investConstData)
  const [fundType, setFundType] = useState(investConstDataState.investTypes[0]);
  const [selectedTypeLabel, setSelectedTypeLabel] = useState(investConstDataState.investTypes[0].label)
  const [isProfileEdit, setEditFlag] = useState(false);
  const [modalFlag, setModalFlag] = useState(false)
  const handleModalClose = () => setModalFlag(false)
  console.log('investConstDataState :', investConstDataState)
  console.log('fund Type:', fundType);
  return (
    <div className="stocks-container">
     
      <div style={{ float: "left" }}>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 160 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Fund-Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={selectedTypeLabel}
            onChange={(e) => {
              debugger
              setSelectedTypeLabel(e.target.value.label)
              setFundType(e.target.value);
            }}
            label="Fund-Type"
          >
            {investConstDataState.investTypes.map((type, typeIndex) => {
              return (
                <MenuItem key={typeIndex} value={type}>
                  {type.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </div>

      <div style={{ paddingTop: "1rem" }}>
        <Button variant="contained" onClick={() => {setModalFlag(true)}}>
          ADD
        </Button>
      </div>

      {fundType.code === "STOCKS" ? (
        <div>
          <table id="customers">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Date</th>
                <th>Stock Name</th>
                <th>Avg-Price</th>
                <th>Quantity</th>
                <th>Total Amt</th>
                <th>Brokerage </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7}>
                  <center>No Data found</center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <table id="customers">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Fund Name</th>
                <th>ID</th>
                <th>Amount</th>
                <th>Number of Units</th>
                <th>Current-price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={8}>
                  <center>No Data found</center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {
        modalFlag?(<CreateInvestmentComponent modalFlag={modalFlag} handleModalClose={handleModalClose}/>):""
      }
      
    </div>
  );
}
