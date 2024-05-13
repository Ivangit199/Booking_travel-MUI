import React from 'react'
import { makeStyles } from '@mui/styles';
import PlaceReview from './PlaceReview';

const useStyles = makeStyles({
    introBook: {
        backgroundColor: 'rgb(2,148,233)',
        borderRadius: '50px',
        width: '55vw',
        padding: '30px',
        marginTop: '20px',
        marginLeft: 20,
    },
});

const IntroBook = () => {
    const classes = useStyles();
    return(
    <div className={classes.introBook}>
        <PlaceReview>
        </PlaceReview>
        <PlaceReview>
        </PlaceReview>
        <PlaceReview>
        </PlaceReview>
        <PlaceReview>
        </PlaceReview>
        <PlaceReview>
        </PlaceReview>
        <PlaceReview>
        </PlaceReview>
    </div>  
    )
    
}

export default IntroBook