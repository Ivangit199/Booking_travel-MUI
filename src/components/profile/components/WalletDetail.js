import React from 'react'
import { makeStyles } from '@mui/styles';
import MainLabel from './MainLabel'
import SelectLabel from './SelectLabel';
import SpanLabel from './SpanLabel';
import WalletMain from './WalletMain';
import WalletDeposit from './WalletDeposit';
import WalletWithdraw from './WalletWithdraw';
import WalletSummary from './WalletSummary';

const useStyles = makeStyles({
    walletDetail: {

  },
  inlineDiv: {
    display: 'inline-flex',
    width: '100%',
    marginTop: 20
  },
  mainLabel: {
    width: '68%',
        color: 'white',
        display: 'grid',
        fontSize: 20,
        marginTop: 20
  },
  disabledInput: {
    width: '100%',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
        borderRadius: 7,
        border: '1px solid rgb(218,218,218)',
        fontSize: 20,
        height: 50
  },
  saveBtn: {
    backgroundColor: 'rgb(1,133,255)',
    width: '20%',
    height: 70,
    color: 'white',
    borderRadius: 10,
    marginTop: 20,
    borderStyle: 'none',
    cursor: 'pointer'
  }
  

});

const PersonalDetail = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.walletDetail}>
            <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist" style={{marginBottom: '0px !important', paddingLeft: 0, marginLeft: 0, width: '100%'}}>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '20%'}}>
                    <button class="nav-link active" id="pills-wallet-tab" data-bs-toggle="pill" data-bs-target="#pills-wallet" type="button" role="tab" aria-controls="pills-wallet" aria-selected="true">WalletDetail</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '20%'}}>
                    <button class="nav-link" id="pills-deposit-tab" data-bs-toggle="pill" data-bs-target="#pills-deposit" type="button" role="tab" aria-controls="pills-deposit" aria-selected="false">DEPOSIT</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '20%'}}>
                    <button class="nav-link" id="pills-withdraw-tab" data-bs-toggle="pill" data-bs-target="#pills-withdraw" type="button" role="tab" aria-controls="pills-withdraw" aria-selected="false">WITHDRAW</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '20%'}}>
                    <button class="nav-link" id="pills-summary-tab" data-bs-toggle="pill" data-bs-target="#pills-summary" type="button" role="tab" aria-controls="pills-summary" aria-selected="false">SUMMARY</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '20%'}}>
                    <button class="nav-link" id="pills-book-tab" data-bs-toggle="pill" data-bs-target="#pills-book" type="button" role="tab" aria-controls="pills-book" aria-selected="false">BUY BOOK</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent" style={{border: '1px solid white', marginTop: '-17px'}}>
                <div class="tab-pane fade show active" id="pills-wallet" role="tabpanel" aria-labelledby="pills-wallet-tab" style={{borderRadius: '50px'}}>
                    <WalletMain/>
                </div>
                    
                <div class="tab-pane fade" id="pills-deposit" role="tabpanel" aria-labelledby="pills-deposit-tab"  style={{borderRadius: '50px'}}>
                <WalletDeposit/>
                </div>
                <div class="tab-pane fade" id="pills-withdraw" role="tabpanel" aria-labelledby="pills-withdraw-tab"  style={{borderRadius: '50px'}}>
                    <WalletWithdraw/>
                </div>
                <div class="tab-pane fade" id="pills-summary" role="tabpanel" aria-labelledby="pills-summary-tab"  style={{borderRadius: '50px'}}>
                    <WalletSummary/>
                </div>
                <div class="tab-pane fade" id="pills-book" role="tabpanel" aria-labelledby="pills-summary-tab"  style={{width: '100%', textAlign: 'center', height: 800, border: '1px solid white'}}>
                    <label style={{fontSize: 60, marginTop: 200, color: 'white', fontWeight: 'bold'}}>
                        You can buy $BOOK on Uniswap<br></br>&transfer it to your wallet
                    </label>
                </div>
            </div>
            
            
        </div>
  )

}

export default PersonalDetail
