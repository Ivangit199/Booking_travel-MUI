import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import PersonalDetail from './PersonalDetail';
import BookingDetail from './BookingDetail';
import WalletDetail from './WalletDetail'
import WishList from './WishList';
import CreditDetail from './CreditDetail';

const useStyles = makeStyles({
  tabs: {
    border: '1px solid white',
    borderRadius: 5,
    padding: 1,
    color: 'white'
  },
  activeTab: {
    '&.Mui-selected': {
      backgroundColor: 'rgb(1,113,255)',
      borderRadius: 5,
      borderRight: 'none',
      color: 'white'
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function SideTab() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'black', display: 'flex', width: '100%'}}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ border: '1px solid white', borderRadius: '10px', padding: 1, width: '10%', height: '280px' }}
        classes={{ root: classes.tabs }}
      >
         <Tab
          label="Account"
          {...a11yProps(0)}
          classes={{ root: classes.activeTab }}
          sx={{color: 'white !important'}}
        />
        <div style={{height: '1px', width: '100%',backgroundColor: 'rgb(210,210,210)', marginTop: 5}}></div>
        <Tab
          label="Bookings"
          {...a11yProps(2)}
          classes={{ root: classes.activeTab }}
          sx={{color: 'white !important'}}
        />
        <div style={{height: '1px', width: '100%',backgroundColor: 'rgb(210,210,210)', marginTop: 5}}></div>
        <Tab
          label="WALLET"
          {...a11yProps(4)}
          classes={{ root: classes.activeTab }}
          sx={{color: 'white !important'}}
        />
        <div style={{height: '1px', width: '100%',backgroundColor: 'rgb(210,210,210)', marginTop: 5}}></div>
        <Tab
          label="CREDIT"
          {...a11yProps(6)}
          classes={{ root: classes.activeTab }}
          sx={{color: 'white !important'}}
        />
        <div style={{height: '1px', width: '100%',backgroundColor: 'rgb(210,210,210)', marginTop: 5}}></div>
        <Tab
          label="WISHLIST"
          {...a11yProps(8)}
          classes={{ root: classes.activeTab }}
          sx={{color: 'white !important'}}
        />
      </Tabs>
      <TabPanel value={value} index={0} style={{width: '100%', marginTop: '-20px'}}>
        <PersonalDetail/>
      </TabPanel>
      <TabPanel value={value} index={2} style={{width: '100%', marginTop: '-20px'}}>
        <BookingDetail/>
      </TabPanel>
      <TabPanel value={value} index={4} style={{width: '100%', marginTop: '-20px'}}>
        <WalletDetail/>
      </TabPanel>
      <TabPanel value={value} index={6} style={{width: '100%', marginTop: '-20px'}}>
        <CreditDetail/>
      </TabPanel>
      <TabPanel value={value} index={8} style={{width: '100%', marginTop: '-20px'}}>
        <WishList/>
      </TabPanel>
    </Box>
  );
}
