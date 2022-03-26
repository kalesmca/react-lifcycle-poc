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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import Modal from "@mui/material/Modal";

import { getProfile, updateProfile } from "../../redux/actions/profile";
import { set } from "date-fns";

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

const companyInitState = {
  name: "",
  location:"",
  email:"",
  empId:"",
  joiningDate:new Date("2014-08-18T21:11:54"),
  releaseDate: new Date("2014-08-18T21:11:54")
}

export default function ProfileContainer() {
  const dispatch = useDispatch();
  const profileState = useSelector((state) => state.profile);
  const [company, setCompany] = useState(companyInitState);
  const [profile, setProfile] = useState(profileState);
  const [isProfileEdit, setEditFlag] = useState(false);
  const [carrierList, setCarrier] = useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));
  const [companyIndex,setCompanyIndex] = useState(profile.companyList?.length ? profile.companyList.length-1 : 0)
  
  

  // let companyIndex = ;

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const updateProfileData = () => {
    setEditFlag(false);
    dispatch(updateProfile(profile));
  };

  const  addCompanyInfo = () => {
    console.log('profile:', profile, company)
    let temp = JSON.parse(JSON.stringify(profile))
    if (profile.companyList?.length) {
      temp.companyList[companyIndex] = company;
      dispatch(updateProfile(temp));
      setCompany(companyInitState)
    } else {
      temp.companyList = [company];
      dispatch(updateProfile(temp));
      setCompany(companyInitState)
    }
    handleClose();
  };
  const editCompany = (index) => {
    setCompanyIndex(index)
    setCompany(profile.companyList[index]);
    handleOpen();
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
                  onChange={(e) => {
                    setProfile({ ...profile, ...{ name: e.target.value } });
                  }}
                  disabled={!isProfileEdit}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Date of Birth"
                    inputFormat="MM/dd/yyyy"
                    value={profile.dob}
                    onChange={(value) => {
                      setProfile({ ...profile, ...{ dob: value } });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    disabled={!isProfileEdit}
                  />
                </LocalizationProvider>
                <TextField
                  id="standard-basic"
                  label="Email-ID"
                  variant="outlined"
                  value={profile.email}
                  onChange={(e) => {
                    setProfile({ ...profile, ...{ email: e.target.value } });
                  }}
                  disabled={!isProfileEdit}
                />
                <TextField
                  id="standard-basic"
                  label="Blood Group"
                  variant="outlined"
                  value={profile.blood}
                  onChange={(e) => {
                    setProfile({ ...profile, ...{ blood: e.target.value } });
                  }}
                  disabled={!isProfileEdit}
                />
                <TextField
                  id="standard-basic"
                  label="Mobile Number"
                  variant="outlined"
                  value={profile.mobile}
                  onChange={(e) => {
                    setProfile({ ...profile, ...{ mobile: e.target.value } });
                  }}
                  disabled={!isProfileEdit}
                />
                <div
                  style={{
                    float: "right",
                    marginRight: "10rem",
                    marginTop: "1rem",
                  }}
                >
                  {!isProfileEdit ? (
                    <Button
                      variant="contained"
                      onClick={() => {
                        setEditFlag(true);
                      }}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => {
                        updateProfileData();
                      }}
                    >
                      Save
                    </Button>
                  )}
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
                    <th>Location</th>
                    <th>Emp-ID</th>
                    <th>Joining Date</th>
                    <th>Release Date</th>
                    <th>
                      {" "}
                      Action <AddCircleIcon onClick={handleOpen} />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                  
                  profileState?.companyList?.length ? (
                    profileState.companyList.map((company, cIndex) => {
                      return (
                        <tr key={cIndex}>
                          <td>{cIndex+1}</td>
                          <td>{company.name}</td>
                          <td>{company.location}</td>
                          <td>{company.empId}</td>
                          <td>{company.joiningDate}</td>
                          <td>{company.releaseDate}</td>
                          <td><span onClick={()=>{editCompany(cIndex)}}><EditIcon/></span> <span><DeleteIcon/></span></td>
                        </tr>
                      );
                    })
                  ): (
                    <tr>
                      <td colSpan={6}>
                        <center>No Data found</center>
                      </td>
                    </tr>
                  )  }
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
          open={modalOpen}
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
                  value={company.name}
                  onChange={(e) => {
                    setCompany({ ...company, ...{ name: e.target.value } });
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Company Location"
                  variant="outlined"
                  value={company.location}
                  onChange={(e) => {
                    setCompany({ ...company, ...{ location: e.target.value } });
                  }}
                />

                <TextField
                  id="standard-basic"
                  label="Emp-ID"
                  variant="outlined"
                  value={company.empId}
                  onChange={(e) => {
                    setCompany({ ...company, ...{ empId: e.target.value } });
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="Comany Mail "
                  variant="outlined"
                  value={company.email}
                  onChange={(e) => {
                    setCompany({ ...company, ...{ email: e.target.value } });
                  }}
                />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Joining Date"
                    inputFormat="MM/dd/yyyy"
                    value={company.joiningDate}
                    onChange={(value) => {
                      setCompany({ ...company, ...{ joiningDate: value } });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />

                  <DesktopDatePicker
                    label="Release Date"
                    inputFormat="MM/dd/yyyy"
                    value={company.releaseDate}
                    onChange={(value) => {
                      setCompany({ ...company, ...{ releaseDate: value } });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Button
                  variant="contained"
                  onClick={() => {
                    addCompanyInfo();
                  }}
                >
                  Save
                </Button>
              </Box>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
