
import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import StocksAndMFComponents from './components/stocksAndMFComponents';
import ChitfundsComponents from './components/chitfundsComponents';
import BankDepositComponent from './components/bankDepositComponent';
import GrowInvestComponent from './components/growInvestComponent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function InvestmentContainer() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className='container'>
      <Box sx={{  width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Stock and Mutual-Funds" {...a11yProps(0)} />
          <Tab label="Bank-Deposits" {...a11yProps(1)} />
          <Tab label="Chit-Funds" {...a11yProps(2)} />
          <Tab label="Grow-App-Deposits" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <StocksAndMFComponents />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <BankDepositComponent />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <ChitfundsComponents />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <GrowInvestComponent />
        </TabPanel>

        
      </SwipeableViews>
    </Box>

    </div>
    
  );
}
