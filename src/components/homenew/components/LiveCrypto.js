import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    bookCrypto: {
        paddingTop: 100,
        paddingLeft: 50,
        paddingRight: 100,
        color: 'white',
        fontSize: 80,
        marginTop: 20,
        display: 'inline-flex',
        width: '100%',
        marginBottom: 30,
        '@media (max-width: 768px)': {
          display: 'grid'
        },
      },
      cryptoLabel: {
        fontSize: 100,
        width: '50%',
        marginRight: '10%',
        display: 'grid',
        '@media (max-width: 768px)': {
          width: '100%'
        },
      },
      tripBtn: {
        width: 305,
        height: 116,
        backgroundColor: 'rgb(10, 59, 205)',
        color: 'white',
        borderRadius: 60,
        paddingLeft: 30,
        paddingTop: 20,
        fontSize: 27,
       
      },
      tripImg: {
        width: 72,
        height: 72,
        marginTop: '-60px',
        marginLeft: 50,
        cursor: 'pointer',
      },
      cryptoDiv: {
        width: '40%',
        textAlign: 'right'
      },
      cryptoImg: {
        width:'90px',
        height: '90px',
        marginLeft: '20%',
        marginBottom: 150,
      },
      meetingIcon: {
        width: 710,
        height: 'auto',
        '@media (max-width: 768px)': {
          marginTop: 30,
          width: '100%'
        },
      }
});

const LiveCrypto = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.bookCrypto}>
        <div className={classes.cryptoLabel}>
            <label>
            Live with Crypto, Travel with Crypto
            </label>
            <label style={{fontSize: 30}}>
            Seamlessly integrte cryptocurrency <br></br> into your lifestyle, from daily transactions <br></br> to unforgettable journeys.
            </label>
            <label className={classes.tripBtn}>
                BOOK YOUR <br></br>TRIP NOW
                <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
            </label>
        </div>
        <img className={classes.meetingIcon} src="./img/header/123.png" alt=""/>
    </div> 
  )
}

export default LiveCrypto
