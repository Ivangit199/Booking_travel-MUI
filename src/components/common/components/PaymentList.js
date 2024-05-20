import React from 'react'
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import MainContainer from './MainContainer';
import PaymentItem from './PaymentItem';
import PayImg from './PayImg';
import CryptoImg from './CryptoImg';

const useStyles = makeStyles({
    paymentList: {
        fontSize: '20px',
        borderRadius: '40px',
      backgroundColor: 'rgb(2,148,233)',
      padding: '20px',
      paddingBottom: '10px',
      marginTop: '20px'
    },
    paymentImg: {
        width: '50px',
        height: '50px',
    },

    paymentSettingBold: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginLeft: '10px',
        color: 'white',
        marginBottom: '0px'
    },
    paymentSetting: {
        fontSize: '14px',
        marginLeft: '10px',
        color: 'white',
        marginBottom: '0px'
    }
  });

const PaymentList = ({ children }) => {
    const classes = useStyles();

    const history = useHistory();

return (
    <MainContainer>
        {/* <PaymentItem fullName={'AVA'} shortName={'AVA'} src={'./img/payment/ava20.png'}/> */}
        <div className="div-inline">
          <div className="radius-div" style={{height: '800px'}}>
            <div>
              <label style={{display: 'block'}}>Accepting Payments via Credit <br></br> Card, Debit Card, and <br></br> Cryptocurrency.</label>
            </div>
            <PayImg/>
          </div>
          <div className="radius-div" style={{height: '800px'}}>
            <div>
              <label style={{display: 'block'}}>List of Accepted <br></br> Cryptocurrencies </label>
            </div>
            <CryptoImg/>
            <div>
              <label className='white-label' style={{marginTop: 20}}>More Partnerships Incoming Soon</label>
            </div>
          </div>
        </div>
        
    </MainContainer>
    
)
}
export default PaymentList
