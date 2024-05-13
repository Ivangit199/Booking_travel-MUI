import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    guestReview: {
       marginTop: '20px',
       fontSize: '24px',
       marginLeft: 20
    },
});

const GuestReview = ({ children }) => {
  const classes = useStyles();

  return (
    <div style={{display: 'inline-flex'}}>
        <div class="form-check" className={classes.guestReview}>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1" style={{marginLeft: '15px', width: '25vw'}}>
            {children}
            </label>
            <label style={{width: '5vw', textAlign: 'right'}}>(38)</label>
        </div>
        
    </div>
  )
}

export default GuestReview
