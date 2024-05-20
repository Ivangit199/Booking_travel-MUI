import React from 'react'
import { makeStyles } from '@mui/styles';
import RadiusButton from '../RadiusButton';
import { Button } from '@mui/material';
import BookSymbol from '../../homenew/components/BookSymbol';

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
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item" style={{ borderRadius: 15, border: '1px solid white', backgroundColor: 'black', padding: 20 }}>
                <h2 className="accordion-header" id="flush-headingOne" style={{ backgroundColor: 'black' }}>
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        style={{ backgroundColor: 'rgb(0, 0, 0)', fontSize: '30px', color: 'white', paddingLeft: '50vw', fontWeight: 'bold' }}
                    >
                        {children}
                        <span className="accordion-icon"></span>
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" style={{ backgroundColor: 'black', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                    <div className="responsive-booking">
                        <img className="small-img" src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" style={{ width: '20%' }} />
                        <div className='responsive-booking-label' style={{ textAlign: 'left', marginLeft: 30, width: '60%', marginRight: '20%' }}>
                            <label style={{ color: 'white', display: 'inline-block', fontSize: '30px', marginTop: '10px' }}>Petronas Twin Towers</label>
                            <label style={{ color: 'white', fontSize: '24px' }}>Visit the iconic Petronas Twin Towers, the world's tallest twin skyscrapers, and enjoy the panoramic view of the city from the skybridge and observation Deck.</label>
                        </div>
                        <BookSymbol />
                    </div>
                    <div className="responsive-booking">
                        <img className="small-img" src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" style={{ width: '20%' }} />
                        <div className='responsive-booking-label' style={{ textAlign: 'left', marginLeft: 30, width: '60%', marginRight: '20%' }}>
                            <label style={{ color: 'white', display: 'inline-block', fontSize: '30px', marginTop: '10px' }}>Petronas Twin Towers</label>
                            <label style={{ color: 'white', fontSize: '24px' }}>Visit the iconic Petronas Twin Towers, the world's tallest twin skyscrapers, and enjoy the panoramic view of the city from the skybridge and observation Deck.</label>
                        </div>
                        <BookSymbol />
                    </div>
                </div>
            </div>
        </div>                                  
    </div>
</div>
    
)

}

export default DailyBooking
