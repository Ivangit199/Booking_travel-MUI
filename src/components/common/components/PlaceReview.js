import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Block } from '@mui/icons-material';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import RadiusButton from '../RadiusButton';

const useStyles = makeStyles({
    placeReview: {
      
    },
  });

const PlaceReview = ({ children }) => {
    const classes = useStyles();

return (
    <div>
        <div className='responsive-div' >
            <img className='small-img responsive-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png"/>
            <div style={{textAlign: 'left', marginLeft: 20, display: 'Block', width: '75%'}}>
                <label style={{color: 'white', display: 'inline-block', fontSize: '30px', marginTop: '10px'}}>Petronas Twin Towers</label>
                <div>
                    <label style={{color: 'white', fontSize: '16px'}}>Jalan Cta - See marginTop<br></br>0.3km from kuala Lumpur</label>
                </div>
                <div>
                    <span style={{fontSize: 14, color: 'white'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                        </svg>
                        Free Canceelation
                    </span>
                    <span style={{fontSize: 14, color: 'white', marginLeft: 10}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                        </svg>
                        Breakfast
                    </span>
                </div>
                <div>
                    <span style={{fontSize: 14, color: 'white'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                        </svg>
                        Parking
                    </span>
                    <span style={{fontSize: 14, color: 'white', marginLeft: 10}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                        </svg>
                        Wifi
                    </span>
                </div>
                <div style={{marginTop: 20}}>
                    <Rating
                        name="customized-icons"
                        defaultValue={1}
                        icon={<StarIcon fontSize="inherit" style={{ color: 'white' }} />} // Set the color of the icon to white
                    />
                </div>
                <div>
                    <label className='final-label'>US$ 157.23<br></br><p style={{fontWeight: 'normal', fontSize: '14px', marginBottom: '5px', display: 'contents'}}>For 3 nights, 1 Room</p>
                    <button className='final-btn' >Book</button>
                    </label>
                </div>
                
            </div>
        </div>
    </div>
)

}

export default PlaceReview
