import React from 'react'
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import MainContainer from './MainContainer';

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
    paymentSettingForNull: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginLeft: '10px',
        color: 'white',
        marginBottom: '0px',
        marginTop: '10px'
    },
    paymentSetting: {
        fontSize: '14px',
        marginLeft: '10px',
        color: 'white',
        marginBottom: '10px'
    }
  });

const PaymentItem = ({ src, fullName, shortName = null }) => {
    const classes = useStyles();

    const history = useHistory();

return (
    <div className={classes.paymentList}>
        <span className='pay-span' >
            <img className= {classes.paymentImg} src={src}/>
            <div>
            {shortName ? (
                <>
                <p className={classes.paymentSettingBold}>{fullName}</p>
                <p className={classes.paymentSetting}>{shortName}</p>
                </>
            ) : (
                <p className={classes.paymentSettingForNull}>{fullName}</p>
            )}
                {/* {
                    shortName && (
                        <p className={classes.paymentSetting}>{shortName}</p>
                    )
                } */}
            </div>          
        </span>
    </div>
    
)
}
export default PaymentItem
