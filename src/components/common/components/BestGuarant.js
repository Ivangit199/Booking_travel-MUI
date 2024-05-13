import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
// import Slider from 'react-slick';
import SliderPrice from './SliderPrice';
import { Label } from 'reactstrap';
import PriceList from '../../PriceList';
import PriceRating from '../../PriceRating';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GrayLine from '../../GrayLine';
import GuestReview from '../../GuestReview';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
    cryptoImg: {
        backgroundColor: 'white',
        borderRadius: '50px',
        width: '40vw',
        padding: '50px',
        marginTop: '30px',
        height: '1300px'
    },
    priceLabel: {
        color: 'black',
        fontSize: '24px',
        fontWeight: 'bold',
        marginLeft: '20px'
    }
});

const BestGuarant = ({ children }) => {
  const classes = useStyles();

  const [value, setValue] = useState([11, 381]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  

  return (
    <div className={classes.cryptoImg}>
        <div>
            <label className={classes.priceLabel}>BEST PRICE GUARANTEED</label>
        </div>
            <div>
                <label style={{fontSize: '20px', marginTop: '30px'}}>Price per night</label>
        </div>
        <Box sx={{ width: 300 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                min={11}  // Minimum value
                max={381} // Maximum value
                width={'100%'}

            />
        </Box>
        <div style={{display: 'inline-flex'}}>
            <label className='min-label'>MIN</label>
            <label className='min-label'>MAX</label>
        </div>
        <div style={{display: 'inline-flex'}}> 
            <Label className='price-label' style={{display: 'inline-flex'}}>
                US$ <p className='price-p'>{value[0]}</p>
            </Label>
            <Label className='price-label' style={{display: 'inline-flex'}}>
                US$ <p className='price-p'>{value[1]}</p>
            </Label>
        </div>
        <PriceList children="Breakfast Included"/>
        <PriceList children="Free Cancelation Included"/>
        <PriceRating children="Free Cancelation Included"/>
        <PriceList children="Guest rating: Excellent/Exceptional"/>
        <PriceList children="Member Price"/>
        <div>
            <label className={classes.priceLabel} style={{marginTop: 25}}>Star Rating</label>
        </div>
        <div style={{display: 'inline-flex'}}> 
            <Label className='price-label' style={{display: 'inline-flex', height: 50, paddingLeft: 18, width: '6vw', marginRight: '10px'}}>
                1 
                <p>
                    <Rating
                        name="customized-icons"
                        defaultValue={1}
                        max={1} // Set the maximum number of icons to 1
                        icon={<StarIcon fontSize="inherit" />}
                    />
                </p>
            </Label>
            <Label className='price-label' style={{display: 'inline-flex', height: 50, paddingLeft: 18, width: '6vw', marginRight: '10px'}}>
                2 
                <p>
                    <Rating
                        name="customized-icons"
                        defaultValue={1}
                        max={1} // Set the maximum number of icons to 1
                        icon={<StarIcon fontSize="inherit" />}
                    />
                </p>
            </Label>
            <Label className='price-label' style={{display: 'inline-flex', height: 50, paddingLeft: 18, width: '6vw', marginRight: '10px'}}>
                3 
                <p>
                    <Rating
                        name="customized-icons"
                        defaultValue={1}
                        max={1} // Set the maximum number of icons to 1
                        icon={<StarIcon fontSize="inherit" />}
                    />
                </p>
            </Label>
            <Label className='price-label' style={{display: 'inline-flex', height: 50, paddingLeft: 18, width: '6vw', marginRight: '10px'}}>
                4 
                <p>
                    <Rating
                        name="customized-icons"
                        defaultValue={1}
                        max={1} // Set the maximum number of icons to 1
                        icon={<StarIcon fontSize="inherit" />}
                    />
                </p>
            </Label>
            <Label className='price-label' style={{display: 'inline-flex', height: 50, paddingLeft: 18, width: '6vw', marginRight: '10px'}}>
                5 
                <p>
                    <Rating
                        name="customized-icons"
                        defaultValue={1}
                        max={1} // Set the maximum number of icons to 1
                        icon={<StarIcon fontSize="inherit" />}
                    />
                </p>
            </Label>
            
        </div>
        <GrayLine/>
        <div>
            <label className={classes.priceLabel} style={{marginTop: 25}}>Guest review</label>
        </div>
        <GuestReview children="Excellent/Exceptional"/>
        <GuestReview children="Very Good"/>
        <GuestReview children="Good"/>
        <GrayLine/>
        <div>
            <label className={classes.priceLabel} style={{marginTop: 25}}>Payment type</label>
        </div>
        <PriceList children="Free Cancellation"/>
    </div>
    
  )

}

export default BestGuarant