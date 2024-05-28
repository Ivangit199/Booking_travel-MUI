import React from 'react'
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const useStyles = makeStyles({
    roomDiv: {
    width: '40%',
    display: 'grid',
    padding: 20,
    height: 500
  },
  RoomImg: {
    width: '90%',
    height: 'auto',
  },
  roomLabel: {
    fontSize: 30,
    color: 'white',
  },
  mapBtn: {
    border: '1px solid white',
    backgroundColor: 'black',
    fontSize: 16,
    color: 'white',
    borderRadius: 10,
    height: 40,
    paddingLeft: 20,
    textAlign: 'left',
    width: '60%',
  },

});

const RoomImg = ({ content }) => {
  const classes = useStyles();

  return (
    
    <div className={classes.roomDiv}>
        <img className={classes.RoomImg} src="./img/header/Mask Group 2.png"/>
        <label className={classes.roomLabel}>Soundproofed Room<br></br>1 King Bed</label>
        <button className={classes.mapBtn}>
            See All Amenities
            <ArrowOutwardIcon  style={{marginLeft: 30}}/>
        </button>
    </div>
  )
}
export default RoomImg
