import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    confirmButton: {
    },
    holdingPrice: {
        height: 50,
        paddingTop: 10,
        border: '1px solid rgb(30,159,235)',
        borderRadius: 30,
        width: '60%',
        marginLeft: '20%',
    },
    qrLabel: {
        padding: 20,
        width: '40%',
        height: 400,
        border: '1px solid rgb(112,112,112)',
        borderRadius: 20
    },
    copyBtn: {
        height: 40,
        padding: '10,20',
        borderRadius: 20,
        backgroundColor: 'rgb(218,218,218)',
        width: '20%',
        textAlign: 'center',
        cursor: 'pointer',
        marginTop: '-20px'
    },
    goToBooking: {
        height: 60,
        paddingTop: 10,
        textAlign: 'center',
        backgroundColor: 'rgb(2,148,233)',
        color: 'white',
        borderRadius: 30,
        width: '50%',
        marginRight: 30
    }
});

const ConfirmButton = ({ toggle, goToConfirmed }) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className="popup">
            <div className="popup-inner confirm-modal">
                <div className={classes.confirmPop}>
                    <label>Payment | TRANSFER FUNDS NOW</label>
                    <label className={classes.holdingPrice}>Holding Pricie for <strong>00:36:54</strong></label>
                </div>
                <div style={{display: 'inline-flex', width:'100%'}}>
                    <label className={classes.qrLabel}>
                        <img style={{width: '100%', height: '100%'}} src='./img/assets/Mask Group 4.png'></img>
                    </label>
                    <div style={{marginTop: 30, marginLeft: 30, display:'grid', fontSize: '20', textAlign: 'left'}}>
                        <label>Network</label>
                        <label style={{fontSize: 24, marginTop: '-20px'}}><strong>MAINNET</strong></label>
                        <label>Scan the code or send your funds to this address</label>
                        <label style={{fontSize: 24, marginTop: '-20px'}}><strong>@NGN(U@Q#N(@#NGJN(#@NG@##@F</strong></label>
                        <label className={classes.copyBtn}>Copy</label>
                        <div style={{display: 'inline-flex', marginTop: 20}}>
                            <label className={classes.goToBooking} onClick={goToConfirmed}>Go To Booking</label>
                            <label style={{marginTop: 10, cursor: 'pointer'}} onClick={toggle}> CANCEL</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ConfirmButton;
