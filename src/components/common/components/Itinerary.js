import React from 'react'
import { makeStyles } from '@mui/styles';
import ListNum from './ListNum';
import RadiusButton from '../RadiusButton';
import DailyBooking from './DailyBooking';

const useStyles = makeStyles({
    itinerary: {
        backgroundSize: 'cover', // This rescales the background image to cover the entire container while maintaining aspect ratio
        backgroundPosition: 'center', // This centers the background image
        textAlign: 'center',
        border: '1px solid white',
        marginTop: '64px',
        color: 'white',
        paddingBottom: '30px',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    labelTo: {
        marginTop: '30px',
        color: 'white',
        fontSize: '24px',
        display: 'inline-flex'
    },
    InputTo: {
        marginTop: '20px',
        color: 'black',
        fontSize: '24px',
        backgroundColor: 'white',
        borderStyle: 'none',
        height: '50px',
        borderRadius: '10px',
        width: '350px'
    },
    experienceBrand: {
        width: '100%'
    },
    destinationImg: {
        display: 'grid',
        width: '25%',
        textAlign: "center",
    },
    destImg: {
        width: '95%',
        height: 'auto'
    },
    desLabel: {
        color: 'white',
        marginTop: 5,
        width: '40%',
        marginRight: 30,
        fontSize: 30,
        textAlign: 'left',
        marginLeft: 20,
        '@media (max-width: 768px)': {
          width: '90%'
        },
  

    },
    heartIcon: {
        width: '44px',
        height: '44px',
        position: 'absolute',
        top: 40,
        right: 30,
        
    },
    bookSymbol: {
        display: 'inline-flex',
        cursor: 'pointer',
        marginTop: 30,
      },
      tripBtn: {
        width: '270px',
        height: 110,
        backgroundColor: 'rgb(11, 60, 222)',
        color: 'white',
        borderRadius: 60,
        paddingLeft: 15,
        paddingTop: 20,
        fontSize: 30,
        marginTop: 20,
        '@media (max-width: 768px)': {
          width: '90%',
          fontSize: 20
        },
      },
      tripImg: {
        width: 72,
        height: 72,
        marginLeft: 40,
        cursor: 'pointer',
        '@media (max-width: 768px)': {
          marginLeft: 20
        },
      },
      bottomDiv: {
        display: 'inline-flex',
        width: '100%',
        '@media (max-width: 768px)': {
          display: 'grid',
        },
      }
});

const Itinerary = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.itinerary}>
      {children}
      <div>
            <label className={classes.labelTo}>I AM TRAVLLING TO</label>
        </div>
        <div>
            <input className={classes.InputTo} type='text' />
        </div>
        <div>
            <label className={classes.labelTo} style={{marginTop: '20px'}}>FOR <ListNum/> DAYS</label>
        </div>
        <label className={classes.tripBtn}>
                CREATE
                <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
            </label>
        <div>
            <label style={{fontSize: 24, marginTop: 30}}>SUGGESTIONS:DUBAI, MALAYSIA, SWEDEN, USA 
            </label>
        </div>
    </div>
  )

}

export default Itinerary
