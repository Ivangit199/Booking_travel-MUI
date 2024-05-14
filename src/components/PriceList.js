import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    priceList: {
       marginTop: '20px',
       marginLeft: 20,
      
    },
    priceLine: {
      marginLeft: '15px',
      width: '24vw',
      '@media (max-width: 768px)': {
        width: '230px',
        fontSize: '20px'
    },
    '@media (max-width: 453px)': {
        width: '180px',
        fontSize: '16px'
      }
    }
});

const PriceList = ({ children }) => {
  const classes = useStyles();

  return (
    <div style={{display: 'inline-flex'}}>
        <div class="form-check" className={classes.priceList}>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1" className={classes.priceLine}>
                {children}
            </label> 
            <label style={{width: '5vw', textAlign: 'right'}}>(38)</label>
        </div>  
        
    </div>
  )
}

export default PriceList
