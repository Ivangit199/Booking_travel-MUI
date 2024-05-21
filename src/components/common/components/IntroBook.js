import React from 'react'
import { makeStyles } from '@mui/styles';
import PlaceReview from './PlaceReview';
import GrayLine from '../../GrayLine';

const useStyles = makeStyles({
    introBook: {
        backgroundColor: 'black',
        borderRadius: '50px',
        width: '100%',
        padding: '30px',
        marginTop: '20px',
        marginLeft: 20,
    },
});

const IntroBook = () => {
    const classes = useStyles();
    return(
    <div className={classes.introBook}>
        <PlaceReview/>
        <PlaceReview/>
        <PlaceReview/>
        <PlaceReview/>
        <PlaceReview/>
        
    </div>  
    )
    
}

export default IntroBook