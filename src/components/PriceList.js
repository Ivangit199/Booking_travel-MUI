import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    priceList: {
       marginTop: '20px',
       fontSize: '24px',
       marginLeft: 20
    },
});

const PriceList = ({ children }) => {
  const classes = useStyles();

  return (
    <div style={{display: 'inline-flex'}}>
        <div class="form-check" className={classes.priceList}>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1" style={{marginLeft: '15px', width: '25vw'}}>
                {children}
            </label> 
            <label style={{width: '5vw', textAlign: 'right'}}>(38)</label>
        </div>  
        
    </div>
  )
}

export default PriceList
