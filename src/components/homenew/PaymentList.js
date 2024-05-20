import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  paymentList: {
    textAlign: 'center',
    color: 'white',
    fontSize: '60px',
    marginTop: '10px'
  },

  payImg: {
    width: 130,
    height: 76,
    marginRight: 10,
    cursor: 'pointer'
  },

  cryptoLabel: {
    width: 130,
    height: 76,
    marginRight: 10,
    backgroundColor: 'white',
    fontSize: 20,
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
    borderRadius: '10px',
    cursor: "pointer"

  }
});

const PaymentList = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.paymentList}>
        <label><strong>Accepting Payment with Card & Crypto</strong></label>
        <div style={{marginTop: 5, position: 'relative'}}>
            <img className={classes.payImg} src="./img/header/Layer 2.png" alt=""/>
            <img className={classes.payImg} src="./img/header/Layer 3.png" alt=""/>
            <img className={classes.payImg} src="./img/header/Layer 4.png" alt=""/>
            <img className={classes.payImg} src="./img/header/Layer 5.png" alt=""/>
            <img className={classes.payImg} src="./img/header/Layer 6.png" alt=""/>
            <img className={classes.payImg} src="./img/header/Layer 7.png" alt=""/>
            <label className={classes.cryptoLabel}><p style={{marginBottom: 0}}>100+</p>Crypto</label>
        </div>
    </div>
  )
}

export default PaymentList
