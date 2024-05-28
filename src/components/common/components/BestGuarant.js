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
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '50px',
        width: '40vw',
        padding: '50px',
        marginTop: '30px',
        height: '1500px',
        fontSize: '28px',
        border: '1px solid',
        '@media (max-width: 768px)': {
            width: '100%'
          },
        '@media (max-width: 550px)': {
            height: '1800px'
        },
        '@media (max-width: 350px)': {
            height: '1900px'
        },
       
    },
    priceLabel: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '20px',
        fontSize: '30px'
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
        <div style={{textAlign: 'center'}}>
            <label className={classes.priceLabel}>Price Range</label>
        </div>
            {/* <div>
                <label style={{fontSize: '20px', marginTop: '30px'}}>Price Range</label>
        </div> */}
        <Box sx={{ width: '300' }}>
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
        <div > 
            <Label className='price-label' style={{display: 'inline-flex'}}>
                <span style={{width: '50%'}}>US$</span><span style={{width: '50%', textAlign: 'right'}}>{value[0]}</span>
            </Label>
            <Label className='price-label' style={{display: 'inline-flex'}}>
            <span style={{width: '50%'}}>US$</span><span style={{width: '50%', textAlign: 'right'}}>{value[1]}</span>
            </Label>
        </div>
        <PriceList children="Breakfast Included"/>
        <PriceList children="Free Cancelation Included"/>
        {/* <PriceRating children="Free Cancelation Included"/> */}
        <PriceList children="Star Rating 4 and above    "/>
        <PriceList children="Guest rating: Excellent/Exceptional"/>
        <PriceList children="Member Price"/>
        <div>
            <label className={classes.priceLabel} style={{marginTop: 25}}>Star Rating</label>
        </div>
        <div style={{display: 'inline-flex', margin: '20px', width: '100%'}}> 
        <Label className='price-label rating-fit'>
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
            <Label className='price-label rating-fit rating-star'>
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
            <Label className='price-label rating-fit'>
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
            <Label className='price-label rating-fit'>
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
            <Label className='price-label rating-fit'>
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
        <div style={{width: '100%', textAlign: 'center'}}>
            <label className={classes.priceLabel} style={{marginTop: 25}}>Payment type</label>
        </div>
        <div class="form-check" style={{marginTop: 20, marginLeft: 20}}>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1" style={{marginLeft: 15}}>
                Free Cancelation
            </label> 
        </div>  
    </div>
    
  )

}

export default BestGuarant
