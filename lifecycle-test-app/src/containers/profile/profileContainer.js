import React, { useState, useEffect } from "react";
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
  const [carrierList, setCarrier] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="container">
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Basic Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
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
                  variant="standard"
                />
                <input
                  className="dob-date"
                  type="date"
                  id="birthday"
                  name="birthday"
                />
                <TextField
                  id="standard-basic"
                  label="Email-ID"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Blood Group"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Mobile Number"
                  variant="standard"
                />
              </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Carrier</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <table id="customers">
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
                {!carrierList.length ? (
                  <tr>
                    <td colSpan={6}>
                      <center>No Data found</center>
                    </td>
                  </tr>
                ) : (
                  ""
                )}
              </table>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Disabled Accordion</Typography>
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Carrier
            </Typography>
            <Typography>
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
                  variant="standard"
                />

                <TextField
                  id="standard-basic"
                  label="Emp-ID"
                  variant="standard"
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
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
