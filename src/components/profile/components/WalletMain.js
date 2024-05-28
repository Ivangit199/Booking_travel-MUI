import React from 'react'
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    walletMain: {
       padding: 30,
       fontSize: 20
    },
    mainLabel: {
        width: '20%',
        padding: 10,
        paddingLeft: 20,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'rgb(1,113,255)',
        color: 'white',
        marginBottom: 20,
        marginRight: 20,
        display: 'grid'
    },
    assetDiv: {
        width: '40%',
        border: '1px solid white',
        borderRadius: 20,
        height: 500,
        paddingTop: 20,
        textAlign: 'center',
        color: 'white'
    },
    borderRow: {
        height: 1,
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 10
    }
})

const WalletMain = () => {
    const classes = useStyles();
    return(
        <div className={classes.walletMain}>
            <div style={{display: 'inline-flex', width: '100%'}}>
                <div className={classes.mainLabel}><span>Total Balance:</span><span style={{fontSize: 30}}>US$: 32243</span></div>
            
                <div className={classes.mainLabel}><span>Balance: ($Book)</span><span style={{fontSize: 30}}>23423 ($4234)</span></div>
            </div>
            <div style={{display: 'inline-flex', width: '100%'}}>
                <div className={classes.mainLabel} style={{paddingTop: 20}}><span style={{fontSize: 30}}>Deposit</span></div>
            
                <div className={classes.mainLabel}></div>
            </div>
            <div className={classes.assetDiv}>
                <label style={{textAlign: 'center'}}>ASSETS</label>
                <div className={classes.borderRow}></div>
                <label style={{width: '100%', display: 'inline-flex', paddingLeft: 40, paddingRight: 40}}>
                    <span style={{width: '50%', textAlign: 'left'}}>ETH</span>
                    <span style={{width: '50%', textAlign: 'right'}}>$2442</span>
                </label>
                <div className={classes.borderRow}></div>
                <label style={{width: '100%', display: 'inline-flex', paddingLeft: 40, paddingRight: 40}}>
                    <span style={{width: '50%', textAlign: 'left'}}>BOOK</span>
                    <span style={{width: '50%', textAlign: 'right'}}>$4321</span>
                </label>
                <div className={classes.borderRow}></div>
                <label style={{width: '100%', display: 'inline-flex', paddingLeft: 40, paddingRight: 40}}>
                    <span style={{width: '50%', textAlign: 'left'}}>BOOK</span>
                    <span style={{width: '50%', textAlign: 'right'}}>$4321</span>
                </label>
                <div className={classes.borderRow}></div>
                <label style={{width: '100%', display: 'inline-flex', paddingLeft: 40, paddingRight: 40}}>
                    <span style={{width: '50%', textAlign: 'left'}}>BOOK</span>
                    <span style={{width: '50%', textAlign: 'right'}}>$4321</span>
                </label>
                <div className={classes.borderRow}></div>
                <label style={{width: '100%', display: 'inline-flex', paddingLeft: 40, paddingRight: 40}}>
                    <span style={{width: '50%', textAlign: 'left'}}>BOOK</span>
                    <span style={{width: '50%', textAlign: 'right'}}>$4321</span>
                </label>
                <div className={classes.borderRow}></div>
                
            </div>
           
        </div>
    )
}

export default WalletMain