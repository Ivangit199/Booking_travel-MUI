import React from 'react'
import { makeStyles } from '@mui/styles';
import SelectLabel from './SelectLabel';
import MainLabel from './MainLabel';
import CreditTable from './CreditTable';
const useStyles = makeStyles({
    walletDeposit: {
       padding: 50,
       fontSize: 16,
       color: 'white'
    },
    mainLabel: {
        width: '40%',
        color: 'white',
        display: 'grid',
        marginRight: 20,
        fontSize: 16,
        marginTop: 20
    },
    disabledInput: {
        width: '100%',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
        borderRadius: 10,
        border: '1px solid rgb(218,218,218)',
        height: 50
    },
    selectLabel: {
        width: '25%',
        color: 'white',
        display: 'grid',
        marginRight: 20,
        fontSize: 16
    },
    disabledInput: {
        width: '100%',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
        borderRadius: 7,
        border: '1px solid rgb(218,218,218)',
        height: 50
    },
   
})

const WalletDeposit = () => {
    const classes = useStyles();
    return(
        <div className={classes.walletDeposit}>
            <div className={classes.selectLabel}>
                <label style={{fontSize: 16, marginLeft:20}}>Select Cryptocurreny</label>
                <select className={classes.disabledInput}>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="1">04</option>
                <option value="2">05</option>
                <option value="3">06</option>
                <option value="3">07</option>
                </select>
            </div>
            <div className={classes.mainLabel}>
                <label style={{marginLeft: 20}}>Send your asset to this address</label>
                <label className={classes.disabledInput}></label>
            </div>
            <label style={{marginLeft: 20, marginTop: 20}}>Recent Transactions</label>
            <CreditTable/>
        </div>
    )
}

export default WalletDeposit