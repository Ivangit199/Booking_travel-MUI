import React from 'react'
import { makeStyles } from '@mui/styles';
import MainRegister from './MainRegister';
import { DirectionsTransitFilledOutlined } from '@mui/icons-material';
import IntroTop from '../../intro/components/IntroTop';
import IntroDestinate from '../../intro/components/IntroDestinate';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import StarIcon from '@mui/icons-material/Star';
import { ImageList, Rating } from '@mui/material';

const useStyles = makeStyles({
    destInfo: {
        width: '100%'
    },
    introDestinate: {
    
    },
  
    bigLabel: {
      fontSize: 30,
    },
  
    mediumLabel: {
      fontSize: 24,
    },
  
    mapBtn: {
      border: '1px solid white',
      backgroundColor: 'black',
      fontSize: 16,
      color: 'white',
      borderRadius: 20,
      marginLeft: 10,
    },
    ratingLabel: {
      color: 'white',
      width: '65%',
      fontSize: 16,
      paddingLeft: 20,
      display: 'inline-flex',
      height: 30
    },
    ratingSize: {
      fontSize: 16,
    },
    introMainDiv: {
      padding: 20,
      color: 'white',
      width: '40%',
      border: '1px solid white',
      borderRadius: 30,
      marginLeft: 30
    },
    disabledInput: {
        width: '48%',
        backgroundColor: 'black',
        padding: 10,
        paddingLeft: 20,
        color: 'white',
        marginRight: 10,
        borderRadius: 5,
        border: '1px solid white',
        display: 'inline-flex',
        height: 40
    },
    introSpan: {
        width: '50%'
    },
    whiteLabel: {
        padding: 15,
        fontSize: 20,
        color: 'black',
        display: 'grid',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 90,
        position: 'relative'
    },
    bottomDiv: {
        color: 'white',
        display: 'inline-flex',
        width: '100%'
    },
    whiteRating: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 55,
        height: 'auto'
    }
});

const DestInfo = ({ hotelInfo, from, to, together}) => {
  const classes = useStyles();

  return (
        <div className={classes.introMainDiv}>
            <div className={classes.destInfo}>
                <label className={classes.bigLabel}>
                    {hotelInfo[0]}, {hotelInfo[1]}
                </label>
                <label className={classes.mediumLabel}>
                    
                    <button className={classes.mapBtn}>
                        Map
                        <ArrowOutwardIcon  style={{marginLeft: 10}}/>
                    </button>
                </label>
                <label className={classes.ratingLabel}>
                    <p>Ratings: 4.3</p>
                    <Rating style={{ fontSize: 16, marginTop: 5, marginLeft: 5, marginRight: 10 }} 
                        name="customized-icons"
                        value={5}
                        icon={<StarIcon style={{ fontSize: 16 }}/>}
                        readonly
                    />
                    <p>from 343 Reviews.</p>
                </label>
            </div>
            <div style={{width: '100%'}}>
                <label className={classes.disabledInput}> {from} </label>
                <label className={classes.disabledInput}> {to} </label>
                <label className={classes.disabledInput}> <span className={classes.introSpan}>{together}</span></label>
                <label className={classes.disabledInput} style={{textAlign: 'center'}}> <span style={{width: '100%'}}> 3 nights </span></label>
            </div>
            <label><strong>Non-Refundable</strong></label>
            <label className={classes.whiteLabel}>
                <img className={classes.whiteRating} src='./img/assets/path 169.png'/>
                <span>Approx. US$ 14.29 in AVA giveback<br></br>with FREE Smart Membership</span>
            </label>
            <label className={classes.whiteLabel}>
                <img className={classes.whiteRating} src='./img/assets/path 169.png'/>
                Earn Proof of Stamp<br></br>NFT with this booking
            </label>
            <div className={classes.bottomDiv}>
                <div style={{display: 'grid', width: '60%'}}>
                    <label style={{fontSize: 20}}> <strong>Payment details:</strong> </label>
                    <label style={{fontSize: 16}}>1 room x3 nights | per Nights: US$238.16<br></br>Taxes Included</label>
                </div>
                <div style={{display: 'grid', width: '40%'}}>
                    <label style={{fontSize: 20}}> <strong>Total:</strong> </label>
                    <label style={{fontSize: 30}}><strong>US$714.46</strong></label>
                </div>
            </div>
            <div style={{fontSize: 16, textAlign: 'center', marginTop: 20}}>
                <label style={{width: '100%'}}>Extra Change (Pat at Property): 30 MYR</label>
            </div>
        </div>
  )
}

export default DestInfo
