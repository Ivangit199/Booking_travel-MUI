import React from 'react'
import { makeStyles } from '@mui/styles';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles({
    priceList: {
       marginTop: '20px',
       marginLeft: 20,
       fontSize: '30px',
        fontWeight: 'normal'
,      
    },

    priceLine: {
        marginLeft: '15px',
        width: '23vw',
        '@media (max-width: 768px)': {
            width: '230px',
            fontSize: '20px'
        },
        '@media (max-width: 525)': {
            width: '180px',
            fontSize: '16px'
          }
    }
});

const PriceRating = ({ children }) => {
  const classes = useStyles();

  return (
    <div style={{display: 'inline-flex', fontSize: 30}}>
        <div class="form-check" className={classes.priceList}>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1" className={classes.priceLine}>
                Star Rating: 4 
                <Rating style={{fontSize: '20px'}}
                    name="customized-icons"
                    defaultValue={1}
                    max={1} // Set the maximum number of icons to 1
                    icon={<StarIcon fontSize="inherit" />}
                />
                and 5
                <Rating style={{fontSize: '20px'}}
                    name="customized-icons"
                    defaultValue={1}
                    max={1} // Set the maximum number of icons to 1
                    icon={<StarIcon fontSize="inherit" />}
                />

            </label> 
            <label style={{width: '6vw', textAlign: 'right'}}>(38)</label>
        </div>  
        
    </div>
  )
}

export default PriceRating
