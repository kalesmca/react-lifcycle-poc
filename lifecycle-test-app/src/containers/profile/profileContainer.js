import React from 'react';
import {TextField, Box} from '@mui/material';
import './profile.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ProfileContainer() {
  return (
    <div className='container'>
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
                '& .MuiTextField-root': { m: 1, width: '33ch',  },
            }}
            noValidate
            autoComplete="off"
        >
             <TextField id="standard-basic" label="Name" variant="standard" />
             <input className="dob-date" type="date" id="birthday" name="birthday" />
             <TextField id="standard-basic" label="Email-ID" variant="standard" />
             <TextField id="standard-basic" label="Blood Group" variant="standard" />
             <TextField id="standard-basic" label="Mobile Number" variant="standard" />




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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
    </div>
  )
}
