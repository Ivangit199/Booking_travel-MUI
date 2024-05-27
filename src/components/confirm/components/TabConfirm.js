import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import BookRegister from './BookRegister';
import BookingPayment from './BookingPayment';
import BookingDetail from './BookingDetail';

const useStyles = makeStyles(() => ({
  tabBtn: {
    backgroundColor: 'rgb(112,112,112) !important',
    color: 'black !important',
    width: '30%', 
    marginRight: '20PX !important',
    borderRadius: '20px !important',
    textTransform: 'none !important',
    fontSize: '24px !important',
    '&.Mui-selected': {
      backgroundColor: 'white !important',
      borderBottom: 'none !important'
    },
  },
  tabDiv: {
    marginLeft: '10%',
  },

  planeImg: {
    width: '36px',
    height: 'auto',
    marginRight: 20
  }
}));

function CustomTabPanel(props) {
  const {children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const goToPayment= () => {
    setValue(2);
  }
  const goToConfirmed= () => {
    setValue(4);
  }
  const goToInfo= () => {
    setValue(0);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={classes.tabDiv}>
          <Tab label="Customer Information" {...a11yProps(0)} className={classes.tabBtn} />
            <img className={classes.planeImg} src="./img/header/Group 180.png" alt=""/>
          <Tab label="Payment Details" {...a11yProps(2)} className={classes.tabBtn} />
            <img className={classes.planeImg} src="./img/header/Group 180.png" alt=""/>
          <Tab label="Booking confirmed" {...a11yProps(4)} className={classes.tabBtn} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
          <BookRegister goToPayment={goToPayment}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} >
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <BookingPayment goToConfirmed={goToConfirmed} goToInfo={goToInfo}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} >
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <BookingDetail/>
      </CustomTabPanel>
    </Box>
  );
}
