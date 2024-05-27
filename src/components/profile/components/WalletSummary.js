import React from 'react'
import { makeStyles } from '@mui/styles';
import SelectLabel from './SelectLabel';
import MainLabel from './MainLabel';
import CreditTable from './CreditTable';
const useStyles = makeStyles({
    walletSummary: {
       padding: 20,
    },
    
})

const WalletSummary = () => {
    const classes = useStyles();
    return(
        <div className={classes.walletSummary}>
            
            <CreditTable/>
        </div>
    )
}

export default WalletSummary