import React from 'react'
import { makeStyles } from '@mui/styles';
import ListNum from './ListNum';
import RadiusButton from '../RadiusButton';
import DailyBooking from './DailyBooking';

const useStyles = makeStyles({
    itinerary: {
        backgroundImage: 'url(/img/assets/3.png)',
        backgroundSize: 'cover', // This rescales the background image to cover the entire container while maintaining aspect ratio
        backgroundPosition: 'center', // This centers the background image
        height: '550px',
        textAlign: 'center',
        borderRadius: 50,
    },
    labelTo: {
        marginTop: '50px',
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
    }
});

const Itinerary = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.itinerary}>
      {children}
      <div>
            <label className={classes.labelTo}>I am Travelling to</label>
        </div>
        <div>
            <input className={classes.InputTo} type='text' />
        </div>
        <div>
            <label className={classes.labelTo} style={{marginTop: '20px'}}>for <ListNum/> days</label>
        </div>
        <div>
            <button className='btn-blue'>Create Itinerary</button>
        </div>
        <div>
            <label style={{fontSize: 24, marginTop: 30}}>Suggestions: 
                <RadiusButton children="Dubai">
                </RadiusButton>
                <RadiusButton children="Sweden">
                </RadiusButton>
                <RadiusButton children="Australia">
                </RadiusButton>
                <RadiusButton children="Turkey">
                </RadiusButton>
                
            </label>
        </div>
    </div>
  )

}

export default Itinerary
