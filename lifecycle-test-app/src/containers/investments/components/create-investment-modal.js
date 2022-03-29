import React from 'react'
import Modal from "@mui/material/Modal";
import { TextField, Box, Button } from "@mui/material";

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
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleClose = () => setModalOpen(false)
    
  return (
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
  )
}
