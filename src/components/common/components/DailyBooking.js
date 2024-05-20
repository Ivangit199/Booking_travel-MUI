import React from 'react'
import { makeStyles } from '@mui/styles';
import RadiusButton from '../RadiusButton';
import { Button } from '@mui/material';

const useStyles = makeStyles({
    dailyBooking: {
      marginLeft: '30px',
      borderStyle: 'none',
      width: '100%',
    },
    dayLabel: {
        width: '100%',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    labelTo: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'

    }

  });

const DailyBooking = ({ children }) => {
    const classes = useStyles();

return (
    <div>
        <div className={classes.dayLabel}>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{backgroundColor: ' rgb(2, 148, 233)', borderStyle: 'none', fontSize: '30', color: 'white', paddingLeft: '50vw', fontWeight: 'bold', fontSize: '30px', borderStyle: 'none'}}>
                        {children}
                         </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className='responsive-booking'>
                            <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" style={{width: '30%'}}/>
                            <div style={{textAlign: 'left', marginLeft: 30}}>
                                <label style={{color: 'white', display: 'inline-block', fontSize: '30px', marginTop: '10px'}}>Petronas Twin Towers</label>
                                <label style={{color: 'white', fontSize: '24px'}}>Visit the iconic Petronas Twin Towers, the world's tallest twin skyscrapers, and enjoy the panoramic view of the city from the skybridge and observation Deck.</label>
                                <div>
                                    <button className='book-btn'>Book Activities </button>
                                    <button className='book-btn'>Research </button>
                                    <button className='book-btn'>Videos </button>
                                </div>
                            </div>
                        </div>
                        <div className='responsive-booking'>
                            <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" style={{width: '30%'}}/>
                            <div style={{textAlign: 'left', marginLeft: 30}}>
                                <label style={{color: 'white', display: 'inline-block', fontSize: '30px', marginTop: '10px'}}>Petronas Twin Towers</label>
                                <label style={{color: 'white', fontSize: '24px'}}>Visit the iconic Petronas Twin Towers, the world's tallest twin skyscrapers, and enjoy the panoramic view of the city from the skybridge and observation Deck.</label>
                                <div>
                                    <button className='book-btn'>Book Activities </button>
                                    <button className='book-btn'>Research </button>
                                    <button className='book-btn'>Videos </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>  
                </div>
                
            </div>                                  
        </div>
    </div>
    
)

}

export default DailyBooking
