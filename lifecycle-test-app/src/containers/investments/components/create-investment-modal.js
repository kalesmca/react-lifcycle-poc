import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import Modal from "@mui/material/Modal";
import { TextField, Box, Button } from "@mui/material";
import {stockModal} from '../investmentModal';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import {addStockInvest} from '../../../redux/actions/investments';
const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 640,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

export default function CreateInvestmentComponent(props) {
    let investmentState = useSelector((state)=> state.investments);
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = React.useState(props.modalFlag);
    const [investType, setInvestType] = React.useState(props.investType)
    const [stockData, setStockData] = React.useState(stockModal);

    const  calculateStockAmt = (e) =>{
      setStockData({ ...stockData, ...{  } });
      if(stockData.stockPrice){
        setStockData({ ...stockData, ...{ stockAmt : e.target.value  * stockData.stockPrice, stockQuantity: e.target.value} })
      } else {
        setStockData({ ...stockData, ...{ stockQuantity: e.target.value} })
      }
    }
    const addStockInvestment = () =>{
      console.log('stockData:', stockData)
      investmentState.stockInsvestments.push(stockData)
      dispatch(addStockInvest(investmentState));
      
    }
  return (
    
        <Modal
          open={modalOpen}
          onClose={props.handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <div id="modal-modal-title" variant="h6" component="h2">
              Create Carrier
            </div>
            <div>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "33ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Stock Name"
                  variant="outlined"
                  value={stockData.stockName}
                  onChange={(e) => {
                    setStockData({ ...stockData, ...{ stockName: e.target.value } });
                  }} 
                />
                <TextField
                  id="standard-basic"
                  label="Stock Price"
                  variant="outlined"
                  value={stockData.stockPrice}
                  onChange={(e) => {
                    setStockData({ ...stockData, ...{ stockPrice: e.target.value } });
                  }} 
                 
                />

                <TextField
                  id="standard-basic"
                  label="Quantity"
                  variant="outlined"
                  value={stockData.stockQuantity}
                  onChange={(e) => {
                    calculateStockAmt(e)
                  }} 
                 
                />
                <TextField
                  id="standard-basic"
                  label="Amount "
                  variant="outlined"
                  value={stockData.stockAmt}
                  
                  disabled
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Invest Date"
                    inputFormat="MM/dd/yyyy"
                    value={stockData.investDate}
                  onChange={(value) => {
                    setStockData({ ...stockData, ...{ investDate: value } });
                  }} 
                    renderInput={(params) => <TextField {...params} />}
                  />

                 
                </LocalizationProvider>
                <Button
                  variant="contained"
                  onClick={() => {
                    addStockInvestment();
                  }}
                >
                  Save
                </Button>
              </Box>
            </div>
          </Box>
        </Modal>
      
  )
}
