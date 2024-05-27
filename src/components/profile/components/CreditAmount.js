import React from 'react'
import { makeStyles, styled } from '@mui/styles';

const useStyles = makeStyles({
    creditAmount: {
        padding: 50,
        fontSize: 20,
        color: 'white'
  },
  creditDiv: {
    width: '15%',
    height: 60,
    borderRadius: 10,
    border: '1px solid white',
    textAlign: 'center',
    paddingTop: 15,
    marginRight: 20
  }
});

const CreditAmount = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.creditAmount}>
        <label>
            1. SELECT YOUR AMOUNT (1 CREDIT = 1$)
        </label>
        <div style={{width: '100%', marginTop: 20}}>
            <label className={classes.creditDiv}>50</label>
            <label className={classes.creditDiv}>100</label>
            <label className={classes.creditDiv}>150</label>
            <label className={classes.creditDiv}>200</label>
            <label className={classes.creditDiv}>300</label>
        </div>
        <label style={{marginTop: 10}}>
            OTHER
        </label>
        <div style={{width: '100%', marginTop: 10}}>
            <label className={classes.creditDiv} style={{width: '20%'}}>Enter amount</label>
        </div>
        <div style={{width: '100%', marginTop: 30}}>
            <label className={classes.creditDiv} style={{width: '20%', backgroundColor: 'rgb(1,113,255)', border: 'none'}}>Proceed to Payment</label>
        </div>
    </div>
  )

}

export default CreditAmount
