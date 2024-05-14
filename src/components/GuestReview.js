import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    guestReview: {
       marginTop: '20px',
       marginLeft: 20,
       fontSize: '30px',
    },
    reviewLine: {
      marginLeft: '15px',
      width: '22vw',
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

const GuestReview = ({ children }) => {
  const classes = useStyles();

  return (
    <div style={{display: 'inline-flex'}}>
        <div class="form-check" className={classes.guestReview}>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label class="form-check-label" for="flexRadioDefault1" className={classes.reviewLine}>
            {children}
            </label>
            <label style={{width: '7vw', textAlign: 'right'}}>(38)</label>
        </div>
        
    </div>
  )
}

export default GuestReview
