import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Box, Button } from "@mui/material";
import "./profile.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import Modal from "@mui/material/Modal";

import {getProfile, updateProfile} from '../../redux/actions/profile';

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

export default function ProfileContainer() {
  const dispatch = useDispatch();
  const profileState = useSelector((state)=> state.profile);
  const [profile, setProfile] = useState(profileState);
  const [isProfileEdit, setEditFlag] = useState(false);
  const [carrierList, setCarrier] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  useEffect(()=>{
    dispatch(getProfile());
  },[])
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateProfileData = () =>{
    setEditFlag(false);
    dispatch(updateProfile(profile))
  }

  return (
    <div className="container">
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>Basic Details</div>
          </AccordionSummary>
          <AccordionDetails>
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
                  label="Name"
                  variant="outlined"
                  value={profile.name}
                  onChange={(e)=>{setProfile({...profile ,...{name:e.target.value}})}}
                  disabled = {!isProfileEdit}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Date of Birth"
                      inputFormat="MM/dd/yyyy"
                      value={profile.dob}
                      onChange={(value)=> {setProfile({...profile, ...{dob:value}})}}
                      renderInput={(params) => <TextField {...params} />}
                      disabled = {!isProfileEdit}
                    />
                </LocalizationProvider>
                <TextField
                  id="standard-basic"
                  label="Email-ID"
                  variant="outlined"
                  value={profile.email}
                  onChange={(e)=>{setProfile({...profile ,...{email:e.target.value}})}}
                  disabled = {!isProfileEdit}
                />
                <TextField
                  id="standard-basic"
                  label="Blood Group"
                  variant="outlined"
                  value={profile.blood}
                  onChange={(e)=>{setProfile({...profile ,...{blood:e.target.value}})}}
                  disabled = {!isProfileEdit}
                />
                <TextField
                  id="standard-basic"
                  label="Mobile Number"
                  variant="outlined"
                  value={profile.mobile}
                  onChange={(e)=>{setProfile({...profile ,...{mobile:e.target.value}})}}
                  disabled = {!isProfileEdit}
                />
                <div style={{float:"right", marginRight:"10rem", marginTop:"1rem"}}>
                {
                  !isProfileEdit ? (<Button variant="contained" onClick={()=>{setEditFlag(true)}}>Edit</Button>):(<Button variant="contained" onClick={()=>{updateProfileData()}}>Save</Button>)
                }

</div>
                

              </Box>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div>Carrier</div>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <table id="customers">
                <thead>
                <tr>
                  <th>Sno</th>
                  <th>Company Name</th>
                  <th>Emp-ID</th>
                  <th>Joining Date</th>
                  <th>End Date</th>
                  <th>
                    {" "}
                    Action <AddCircleIcon onClick={handleOpen} />
                  </th>
                </tr>
                </thead>
                <tbody>
                {!carrierList.length ? (
                  <tr>
                    <td colSpan={6}>
                      <center>No Data found</center>
                    </td>
                  </tr>
                ) : (
                  ""
                )}
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <div>Disabled Accordion</div>
          </AccordionSummary>
        </Accordion>
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
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
                  label="Company Name"
                  variant="outlined"
                />

                <TextField
                  id="standard-basic"
                  label="Emp-ID"
                  variant="outlined"
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Joining Date"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  
                
                    <DesktopDatePicker
                      label="End Date"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Button variant="contained">Save</Button>

              </Box>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
