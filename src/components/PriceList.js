import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    priceList: {
       marginTop: '20px',
       marginLeft: 20,
      
    },
    priceLine: {
      marginLeft: '15px',
      display: 'inline-flex',
      width: '100%'
    }
});

const PriceList = ({ children, getToggle }) => {
  const classes = useStyles();

  return (
        <div class="form-check" className={classes.priceList}>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={(e) => getToggle(e.target.checked)}/>
            <label class="form-check-label" for="defaultCheck1" className={classes.priceLine}>
                <span style={{width: '80%'}}>{children}</span><span style={{width: '20%', textAlign: 'right'}}>(33)</span>
            </label> 
        </div>  
        
  )
}

export default PriceList
