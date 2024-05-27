import React from 'react'
import { makeStyles } from '@mui/styles';;

const useStyles = makeStyles({
    creditCard: {
        fontSize: 20,
        color: 'white',
        paddingTop: 50,
        textAlign: 'center',
        width: '100%',
        height: 500
  },
  disabledInput: {
    width: '30%',
    backgroundColor: 'black',
    padding: 10,
    color: 'white',
    borderRadius: 10,
    border: '1px solid white',
    height: 50,
    marginTop: 20,
    marginLeft: '35%',
 }
});

const CreditCard = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.creditCard}>
        <div style={{display: 'grid'}}>
            <label>ENTER SERIAL NUMBER</label>
            <input type='text' id='serial' className={classes.disabledInput}/>
        </div>
        <div style={{display: 'grid', marginTop: 20}}>
            <label>ENTER Code</label>
            <input type='text' id='code' className={classes.disabledInput}/>
        </div>
        <div style={{display: 'grid', marginTop: 20}}>
            <label className={classes.disabledInput} style={{backgroundColor: 'rgb(1,113,255)', width: '20%', marginLeft: '40%', border: 'none'}}>REDEEM</label>
        </div>
    </div>
  )

}

export default CreditCard
