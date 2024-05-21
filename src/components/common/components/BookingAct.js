import React from 'react'
import { makeStyles } from '@mui/styles';
import ListNum from './ListNum';
import RadiusButton from '../RadiusButton';
import DailyBooking from './DailyBooking';
import HoverButton from './HoverButton';
import BestGuarant from './BestGuarant';
import IntroBook from './IntroBook';
import { Media } from 'reactstrap';

const useStyles = makeStyles({
    bookingAct: {
        backgroundColor: 'black',
        paddingTop: '50px',
        paddingLeft: '150px',
        marginTop: 65,
        paddingBottom: 30,
        border: '1px solid white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        textAlign: 'center',
        '@media (max-width: 768px)': {
            paddingLeft: '40px', // Hide the element on screens with a maximum width of 768px
          },
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
    },
    tripBtn: {
        width: '270px',
        height: 90,
        backgroundColor: 'rgb(11, 60, 222)',
        color: 'white',
        borderRadius: 50,
        paddingLeft: 30,
        paddingTop: 10,
        fontSize: 20,
        marginTop: 20,
        '@media (max-width: 768px)': {
          fontSize: 20,
          width: '90%'
        },
    },
    tripImg: {
    width: 72,
    height: 72,
    marginLeft: '30%',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
        marginLeft: '65%',
      },
      '@media (max-width: 600px)': {
        marginLeft: '60%',
      },
    },
});

const BookingAct = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.bookingAct}>
        {children}
        <div>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{border: 'none', display: 'flex', justifyContent: 'center'}}>
                <li class="nav-item" role="presentation">
                    <button class="nav-link active book-tab-btn" id="pills-stays-tab" data-bs-toggle="pill" data-bs-target="#pills-stays" type="button" role="tab" aria-controls="pills-stays" aria-selected="true">STAYS</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link book-tab-btn" id="pills-flights-tab" data-bs-toggle="pill" data-bs-target="#pills-flights" type="button" role="tab" aria-controls="pills-flights" aria-selected="false">FLIGHTS</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link book-tab-btn" id="pills-activities-tab" data-bs-toggle="pill" data-bs-target="#pills-activities" type="button" role="tab" aria-controls="pills-activities" aria-selected="false">ACTIVITIES</button>
                </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-stays" role="tabpanel" aria-labelledby="pills-stays-tab">
                        <div>
                            <div>
                                <input type='text' className='search-input search-activity'/>
                            </div>
                            <div>
                                <input type='text' className='search-input' style={{width: '15%'}} placeholder='From'/>
                                <input type='text' className='search-input'  style={{width: '15%'}} placeholder='To'/>
                                <input type='text' className='search-input search-media'  style={{width: '15%'}} placeholder='2 Adults 1 Child'/>
                            </div>
                        </div>
                        <label className={classes.tripBtn}>
                                SEARCH
                                <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
                        </label>
                        <div>
                            <label className='suggest-label' style={{fontSize: 24, marginTop: 30, color: 'white'}}>
                                SUGGESTIONS: DUBAI, MALAYSIA, SWEDEN. USA 
                            </label>
                        </div>
                    </div>
                <div class="tab-pane fade" id="pills-flights" role="tabpanel" aria-labelledby="pills-flights-tab">
                <div>
                    <div>
                        <input type='text' className='search-input search-activity'/>
                    </div>
                    <div>
                        <input type='text' className='search-input' style={{width: '15%'}} placeholder='From'/>
                        <input type='text' className='search-input'  style={{width: '15%'}} placeholder='To'/>
                        <input type='text' className='search-input search-media'  style={{width: '20%',  }} placeholder='2 Adults 1 Child'/>
                    </div>
                    </div>
                    <label className={classes.tripBtn}>
                            SEARCH
                            <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
                    </label>
                    <div>
                        <label className='suggest-label' style={{fontSize: 24, marginTop: 30, color: 'white'}}>
                            SUGGESTIONS: DUBAI, MALAYSIA, SWEDEN. USA 
                        </label>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-activities" role="tabpanel" aria-labelledby="pills-activities-tab">
                <div>
                    <div>
                        <input type='text' className='search-input search-activity'/>
                    </div>
                    <div>
                        <input type='text' className='search-input' style={{width: '15%'}} placeholder='From'/>
                        <input type='text' className='search-input'  style={{width: '15%'}} placeholder='To'/>
                        <input type='text' className='search-input search-media'  style={{width: '20%',  }} placeholder='2 Adults 1 Child'/>
                    </div>
                    </div>
                    <label className={classes.tripBtn}>
                            SEARCH
                            <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
                    </label>
                    <div>
                        <label className='suggest-label' style={{fontSize: 24, marginTop: 30, color: 'white'}}>
                            SUGGESTIONS: DUBAI, MALAYSIA, SWEDEN. USA 
                        </label>
                    </div>
                </div>
                </div>
            </div>       
        
        </div>
        <div className='booking-total-media'>
            <BestGuarant>
            </BestGuarant>
            <IntroBook/>
        </div>
    </div>
  )

}

export default BookingAct
