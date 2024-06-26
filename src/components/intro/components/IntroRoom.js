import React from 'react'
import { makeStyles } from '@mui/styles';
import RoomDetail from './RoomDetail';

const useStyles = makeStyles({
  introRoom: {
    
  },
  roomLabel: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    width: '100%',
  }
});

const IntroRoom = ({ hotelInfo, from, to, together}) => {
  const classes = useStyles();

  return (
    
      <div className={classes.introRoom}>
        <label className={classes.roomLabel}>
            <span >7 room types | 11 room deals available</span>
        </label>
        <RoomDetail hotelInfo={hotelInfo} from={from} to={to} together={together}/>
    </div>
  )
}
export default IntroRoom
