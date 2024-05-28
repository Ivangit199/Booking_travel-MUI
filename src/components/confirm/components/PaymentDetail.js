import React, {useState} from 'react'
import { makeStyles } from '@mui/styles';
import GrayLine from '../../GrayLine';
import SelectLabel from '../../profile/components/SelectLabel';
import ConfirmButton from './ConfirmButton'

const useStyles = makeStyles({
    mainRegister: {
     padding: 30,
     width: '60%',
     border: '1px solid white',
     borderRadius: 30,
     color: 'white',
    },
    regisLabel: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        width: '100%',
    },
    tripBtn: {
        width: '230px',
        height: 80,
        backgroundColor: 'rgb(10, 59, 205)',
        color: 'white',
        borderRadius: 40,
        paddingLeft: 30,
        paddingTop: 10,
        fontSize: 20,
        marginTop: 23,
        cursor: 'pointer',
        '@media (max-width: 768px)': {
          width: '90%',
          fontSize: 20
        },
      },
      tripImg: {
        width: 60,
        height: 60,
        marginLeft: '10px',
        cursor: 'pointer',
        '@media (max-width: 768px)': {
            marginLeft: '45%'
          },
      },
      paymentImg: {
        width: '17%',
        marginRight: 10,
        height: 'auto',
        cursor: 'pointer'
      },
      whiteDiv: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        fontSize: 16,
        marginTop: 50,
        color: 'black'
      },
      paymentSmallImg: {
        height: 40,
        width: 'auto',
        marginTop: 20,
        marginRight: 20
      },
      regisInput : {
        width: '50%',
        borderStyle: '1px solid rgb(218,218,218)',
        paddingLeft: 20,
        fontSize: 24,
        borderRadius: '5px',
        marginRight: 20
    },
    blueLabel: {
        padding: 20,
        backgroundColor: 'rgb(242,249,255)',
        border: '1px solid rgb(219,228,250)'
    },
    blueSpan: {
        color: 'rgb(49,102,192)'
    },
    mainFont: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20
    },
    mainInput: {
        fontSize: 24,
        color: 'white',
        border: 'none',
        borderRight: '1px solid white',
        backgroundColor: 'black',
        paddingLeft: 10
    },
    grayLabel: {
        fontSize: 20,
        color: 'rgb(112,112,112)'
    },
    selectCrypto: {
        marginRight: 20,
        borderRadius: 10,
        border: '1px solid rgb(112,112,112)',
        height: 60,
        backgroundColor: 'black',
        color: 'white',
        paddingLeft: 20,
        fontSize: 20
    },
    connectLabel: {
        width: '30%',
        backgroundColor: 'white',
        height: 60,
        borderRadius: 20,
        textAlign: 'center',
        color: 'black',
        padding: 20,
        fontWeight: 'bold',
        marginRight: 20
    }
});



const PaymentDetail = ({ goToConfirmed, goToInfo }) => {
  const classes = useStyles();
  const [method, setMethod] = useState('creditCard') 
  const [seenConfirm, setConfirm] = useState(false)
  function ConfirmPop () {
    setConfirm(!seenConfirm);
  };

  return (
    <div className={classes.mainRegister}>
         <div style={{marginTop: 30, fontSize: 16}}></div>
         <div>
            <label style={{fontSize: 24}}><strong>Your Booking Details</strong></label>
            <div style={{display: 'grid'}} className={classes.grayLabel}>
                <label>
                    Name: Elon <span style={{marginLeft: '250px'}}>Room 1:Elon</span>
                </label>
                <label>
                    Phone Number:
                </label>
                <label>
                   Email:
                </label>
            </div>
            <label className={classes.mainFont}>
                  Select Your Payment Method
                </label>
            <div style={{width: '100%'}}>
                <img className={classes.paymentImg} src="./img/assets/Group 188.png" alt="" onClick={() => setMethod("creditCard")} />
                <img className={classes.paymentImg} src="./img/assets/Group 187.png" alt="" onClick={() => setMethod("crypto")}/>
                <img className={classes.paymentImg} src="./img/assets/metamask4112.png" alt="" onClick={() => setMethod("metaMask")}/>
                <img className={classes.paymentImg} src="./img/assets/1 unqlWGZpOPa6o-E9JTbDZg.png" alt="" onClick={() => setMethod("binance")}/>
                <img className={classes.paymentImg} src="./img/assets/images.png" alt="" onClick={() => setMethod("cryptoPay")}/>
            </div>
            
        </div>
        {method === 'creditCard' && (
            <div>
                <label className={classes.mainFont}>Card Number</label>
                <div style={{width: '80%'}}>
                    <label style={{display: 'inline-flex', width: '60%', padding: 10, border: '1px solid white', borderRadius: 10}}>
                        <input className={classes.mainInput} style={{width: '55%'}} type='text' placeholder='Card Number'/>
                        <input className={classes.mainInput} style={{width: '25%'}} type='text' placeholder='MM/YY'/>
                        <input className={classes.mainInput} style={{width: '20%', borderRight: 'none'}} type='text' placeholder='CVC'/>
                    </label>
                    <label style={{backgroundColor: 'white', color: 'black', padding: 10, borderRadius: 10, textAlign: 'center', fontSize: 24, marginLeft: 10}}>3D Secure</label>
                </div>
                <label className={classes.grayLabel} style={{marginTop: 10}}>All credit card data is securely processed through our payment partner <span style={{color: 'white'}}><string>Strip</string></span></label>
                
            </div>
        )}
        {method === 'crypto' && (
            <div style={{display: 'grid'}}>
                <label className={classes.mainFont}>Pay with Crypto</label>
                <div style={{display: 'inline-flex', width: '100%'}}>
                    <div style={{display: 'grid', width: '100%'}}>
                        <label className={classes.grayLabel}>Select Cryptocurryency</label>
                        <select className={classes.selectCrypto}>
                            <option value="1">BitCoin</option>
                            <option value="2">Ethereum </option>
                            <option value="3">Ripple </option>
                            <option value="4">Litecoin </option>
                            <option value="5">Cardano  </option>
                            <option value="6">Polkadot  </option>
                        </select>
                    </div>
                    <div style={{display: 'grid',  width: '100%'}}>
                        <label className={classes.grayLabel}>Select NetWork</label>
                        <select className={classes.selectCrypto}>
                            <option value="1">Bitcoin Network (BTC)</option>
                            <option value="2">Ethereum Network (ETH) </option>
                            <option value="3">Binance Smart Chain (BSC) </option>
                            <option value="4">Solana Network (SOL) </option>
                            <option value="5">Cardano Network (ADA) </option>
                            <option value="6">Polkadot Network (DOT)  </option>
                            <option value="7">Ripple Network (XRP)  </option>
                        </select>
                    </div>
                </div>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    Cryptocurrency Refund Policy: Due to price volatility and regulatory requirements, refunds (if applicable) will be processed in Credits account.
                </label>
            </div>
        )}
         {method === 'metaMask' && (
            <div>
                <label className={classes.mainFont}>Metamask</label>
                <div style={{display: 'inline-flex', width: '100%'}}>
                    <label className={classes.connectLabel}>Connect Wallet</label>
                    <select className={classes.selectCrypto} style={{width: '45%'}}>
                            <option value="0">Choose Currency</option>
                            <option value="1">Ether </option>
                            <option value="2">BNB  </option>
                            <option value="3">MATIC  </option>
                            <option value="4">AVAX  </option>
                            <option value="5">FTM   </option>
                        </select>
                </div>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    Once you click <span style={{color: 'white'}}><strong>Pay Now</strong></span>, make sure you approve on the wallet.
                </label>
            </div>
        )}
        {method === 'binance' && (
            <div>
                <label className={classes.grayLabel} style={{marginTop: 30}}>
                    <span style={{color: 'white'}}><strong>Binance Pay</strong></span> is a mobile QE code payment solution powered by  <span style={{color: 'white'}}><strong>Binance</strong></span>
                </label>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    step 1: Click <span style={{color: 'white'}}><strong>'Pay Now'</strong></span> Button
                </label>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    step 2: Login to your <span style={{color: 'white'}}><strong>Binance Pay</strong></span> Account
                </label>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    step 3: Confirm the Payment
                </label>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    <span style={{color: 'white'}}><strong>Refund Policy:</strong></span> Refunds(if applicable) are processed in USDT to your binance Pay Wallet
                </label>
            </div>
        )}
        {method === 'cryptoPay' && (
            <div>
                <label className={classes.grayLabel} style={{marginTop: 30}}>
                    <span style={{color: 'white'}}><strong>Crypto.com Pay</strong></span> is a mobile QE code payment solution powered by  <span style={{color: 'white'}}><strong>Crypto.com</strong></span>
                </label>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    step 1: Click <span style={{color: 'white'}}><strong>'Pay Now'</strong></span> Button
                </label>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    step 2: Login to your <span style={{color: 'white'}}><strong>Binance Pay</strong></span> Account
                </label>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    step 3: Confirm the Payment
                </label>
                <label className={classes.grayLabel} style={{marginTop: 20}}>
                    <span style={{color: 'white'}}><strong>Refund Policy:</strong></span> The original cryptocurrency used to purchase the booking will be credited to your <span style={{color: 'white'}}><strong>Crypto.com</strong></span> Account
                </label>
            </div>
        )}
        <div style={{width: '100%', marginTop: 10}}>
            <label style={{fontSize: 24, marginRight: 30}} onClick={goToInfo}>Back</label>
            <label className={classes.tripBtn} onClick={ConfirmPop}>
            {seenConfirm ? <ConfirmButton  toggle={ConfirmPop} goToConfirmed={goToConfirmed} /> : null}
                <span >BOOK NOW</span>
                <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
            </label>
        </div>
        <label style={{marginTop: 30}} className={classes.grayLabel}>By completing this booking, you agree to the <span className={classes.blueSpan}>Booking Conditions, Terms and Conditions</span> and <span className={classes.blueSpan}>Privacy Policy.</span></label>
    </div>
  )
}

export default PaymentDetail
