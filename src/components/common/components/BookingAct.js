import React from 'react'
import { makeStyles } from '@mui/styles';
import ListNum from './ListNum';
import RadiusButton from '../RadiusButton';
import DailyBooking from './DailyBooking';
import HoverButton from './HoverButton';
import BestGuarant from './BestGuarant';
import IntroBook from './IntroBook';

const useStyles = makeStyles({
    bookingAct: {
        backgroundImage: 'url(/img/assets/3.png)',
        backgroundSize: 'cover', // This rescales the background image to cover the entire container while maintaining aspect ratio
        backgroundPosition: 'center', // This centers the background image
        height: '550px',
        borderRadius: 50,
        paddingTop: '50px',
        paddingLeft: '150px'
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

const BookingAct = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.bookingAct}>
        {children}
        <div>
            <HoverButton children="Stays"/>
            <HoverButton children="Flights"/>
            <HoverButton children="Activities"/>
            </div>
            <div>
                <div>
                    <input type='text' className='search-input' placeholder='Search for places, properties or activities'/>
                </div>
                <div>
                    <input type='text' className='search-input' style={{width: '15%'}} placeholder='from'/>
                    <input type='text' className='search-input'  style={{width: '15%'}} placeholder='from'/>
                    <input type='text' className='search-input'  style={{width: '20%'}} placeholder='2 Adults 1 Child'/>
                </div>
            </div>
            <div>
                <button className='btn-blue'>Search</button>
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
        <div style={{display: 'inline-flex'}}>
            <BestGuarant>

            </BestGuarant>
            
            <IntroBook/>
        </div>
    </div>
  )

}

export default BookingAct
