import React from 'react'
import { makeStyles, styled } from '@mui/styles';
import VerticalLine from './VerticalLine';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const useStyles = makeStyles({
    flightDetail: {
        padding: 20,
        width: '100%',
        display: 'inline-flex',
        marginTop: 20,
        fontSize: 20
    },
    stayImg: {
      width: '250px',
      height: '250px',
      display: 'grid'
    },
    bigLabel: {
      fontSize: 36,
    },
  
    mediumLabel: {
      fontSize: 24,
    },

    introMainDiv: {
      padding: 20,
      display: 'inline-flex',
      color: 'white',
      width: '100%',
    },

    bookBtn: {
      display: 'inline-flex',
      color: 'white',
      backgroundColor: 'rgb(0,113,255)',
      borderRadius: 10,
      width: '30%',
      height: 120,
      paddingRight: 20
      
    },
    bookSpan: {
      marginLeft: 20,
      fontSize: 20,
      marginTop: 20,
      marginRight: 20,
      '@media (max-width: 768px)': {
          marginTop: 10,
          marginLeft: 0
        },
    },
    bookP: {
      fontSize: 16
    },
    destInfo: {
      display: 'grid',
      width: '60%',
      marginLeft: '30px',
      textAlign: 'left'
    },

    planeImg: {
        width: 50,
        marginRight: 20
    },
    layOver: {
        width: '70%',
        height: 60,
        textAlign: 'center',
        border: '1px solid white',
        borderRadius: 10,
        paddingTop: 10,
        marginTop: 20
    },
    locationDiv : {
        width: '70%',
        paddingTop: 10,
        color: 'white',
        border: '1px solid white',
        borderRadius: 10,
        display: 'inline-flex'
    },
    locationIcon: {
        backgroundColor: 'black',
        width: '45px !important',
        height: '45px !important',
    }
    
    
});

const StayDetail = ({ children, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.flightDetail} style={{color: 'white'}}>
       <img src="./img/header/2npa94yu.png" alt="" className={classes.stayImg}/>
            <div className={classes.destInfo}>
            <label className={classes.bigLabel}>
                <strong>Mumbai (BOM) - Longview (GGG)</strong>
            </label>
            <label className={classes.mediumLabel}>
                10 Jun 2024, Monday,
            </label>
            <label style={{marginTop: 20}}>
                <img src='./img/header/airplane-round.png' className={classes.planeImg}></img>
                12:10 - Mumbai Chhatrapati Shivaji International (BOM)
            </label>
            <div style={{display: 'inline-flex'}}>
                <VerticalLine/>
                3h,25 Mins
            </div>
            <label>
                <img src='./img/header/airplane-round.png' className={classes.planeImg}></img>
                17:10 - Hamad International (DOH)
            </label>
            <label className={classes.layOver}>Layover: 3 hours (DOH)</label>
            <label style={{marginTop: 20}}>
                <img src='./img/header/airplane-round.png' className={classes.planeImg}></img>
                20:10 - Hammad International (DOH)
            </label>
            <div style={{display: 'inline-flex'}}>
                <VerticalLine/>
                6h,25 Mins
            </div>
            <label>
                <img src='./img/header/airplane-round.png' className={classes.planeImg}></img>
                21:10 - Hamad International (DOH)
            </label>
            <div className={classes.locationDiv}>
                <LocationOnIcon className={classes.locationIcon}/>
                <label style={{marginLeft: 20}}>
                    11 Jun 2024<br></br>
                    05:32, Monday<br></br>
                    Arrive at destination<br></br>
                    Longview
                </label>
            </div>
        </div>
    </div>
  )
}
export default StayDetail
