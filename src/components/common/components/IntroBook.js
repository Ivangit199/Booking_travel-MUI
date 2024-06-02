import React, { useEffect, useState } from 'react'
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

const IntroBook = ({children, from, to, together}) => {
    const classes = useStyles();
    const [hotelInfo, setHotelInfo] = useState([]);

  useEffect(() => {
    if (typeof children === 'string') {
      setHotelInfo(children.split("\n"));

    }
  }, [children]);
    return(
    <div className={classes.introBook}>
    {hotelInfo.map((hotelInfo, index) => (  
        <PlaceReview children={hotelInfo} from={from} to={to} together={together} index={index}/>
    ))}
        
    </div>  
    )
    
}

export default IntroBook