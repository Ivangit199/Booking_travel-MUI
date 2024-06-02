import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { TextFormatOutlined } from '@mui/icons-material';
import Itinerary from './components/Itinerary';
import RadiusButton from './RadiusButton';
import DailyBooking from './components/DailyBooking';
import HoverButton from './components/HoverButton';
import BookingAct from './components/BookingAct';
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles({
    boderTab: {
        borderRadius: '30px',
        // backgroundColor: 'rgb(1,112,177)',
        height: '150px',
        paddingTop: '20px',
        fontSize: '24px',
        width: '100%',
        color: 'white',
    },

    noBackgroundBtn: {
        backgroundColor: 'rgb(1,112,177) !important',
        borderStyle: 'none',
        width: '100%',
        color: 'red',
    },
});

const TabBooking = () => {
    const classes = useStyles();
    const [period, setPeriod] = useState("1") 
    const [dailyPlan, setDailyPlan] = useState([]);
    const [destination, setDestination] = useState("") 
    const getTravelPeriod = (result) => {
        setPeriod(result);
    }
    const getDestination = (result) => {
        setDestination(result);
    }
    const getPlan = (plan) => {
        setDailyPlan(plan.split('\n\n'))
    }
    return (
        <div style={{marginTop: '10px', padding:'20px'}}>
            <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist" style={{marginBottom: '0px !important', paddingLeft: 0, marginLeft: 0, width: '100%'}}>
                <li class="nav-item col-6 p-0" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Create Itinerary</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Book Flights/Stay/Activities</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent" style={{marginTop: '-65px'}}>
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{borderRadius: '50px'}}>
                    <Itinerary getTravelPeriod={getTravelPeriod} getPlan={getPlan} getDestination={getDestination}>

                    </Itinerary>
                    <div>
                        <label className='intro-div' style={{fontSize: 60, paddingBottom: '0px', width: '100%', color: 'white'}}>Successfully Created Itinerary <br></br> for {destination} - {period} days</label>
                        <div className='daily-intro'>
                            {dailyPlan.map((plan, index) => (  
                                <DailyBooking children={plan}>               
                                </DailyBooking>
                            ))}
                        </div>
                        
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"  style={{borderRadius: '50px'}}>
                    <BookingAct>
                    </BookingAct>
                        
                </div>
            </div>
            
            
        </div>
    )
}

export default TabBooking