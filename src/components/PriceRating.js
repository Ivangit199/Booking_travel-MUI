import React from 'react'
import { makeStyles } from '@mui/styles';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles({
    priceList: {
       marginTop: '20px',
       fontSize: '24px',
       marginLeft: 20
    },
});

const PriceRating = ({ children }) => {
  const classes = useStyles();

  return (
    <div style={{display: 'inline-flex', fontSize: 30}}>
        <div class="form-check" className={classes.priceList}>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1" style={{marginLeft: '15px', width: '25vw'}}>
                Star Rating: 4 
                <Rating
                    name="customized-icons"
                    defaultValue={1}
                    max={1} // Set the maximum number of icons to 1
                    icon={<StarIcon fontSize="inherit" />}
                />
                and 5
                <Rating
                    name="customized-icons"
                    defaultValue={1}
                    max={1} // Set the maximum number of icons to 1
                    icon={<StarIcon fontSize="inherit" />}
                />

            </label> 
            <label style={{width: '5vw', textAlign: 'right'}}>(38)</label>
        </div>  
        
    </div>
  )
}

export default PriceRating
