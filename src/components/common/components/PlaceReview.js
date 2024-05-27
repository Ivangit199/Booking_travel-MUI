import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Block, Directions } from '@mui/icons-material';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import RadiusButton from '../RadiusButton';
import { useHistory } from 'react-router-dom';
import GrayLine from '../../GrayLine';

const useStyles = makeStyles({
    placeReview: {
    },
    supportDiv: {
        color: 'white',
        fontSize: 20,
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '10%'
    },
    tripBtn: {
        width: '270px',
        height: 90,
        backgroundColor: 'rgb(11, 60, 222)',
        color: 'white',
        borderRadius: 50,
        paddingLeft: 30,
        paddingTop: 10,
        fontSize: 20,
        '@media (max-width: 768px)': {
          width: '90%',
          fontSize: 20
        },
      },
      tripImg: {
        width: 72,
        height: 72,
        marginLeft: '48%',
        cursor: 'pointer',
        '@media (max-width: 768px)': {
            marginLeft: '45%'
          },
      },
      bookBtn: {
        display: 'inline-flex',
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 50,
        width: '100%',
        height: 90,
        
      },
      bookSpan: {
        marginLeft: 20,
        fontSize: 20,
        marginTop: 20,
        '@media (max-width: 768px)': {
            marginTop: 10,
            marginLeft: 0
          },
      },
      bookP: {
        fontSize: 16
      },
      destImg: {
        width: '95%',
        height: 'auto'
    },
    desLabel: {
        fontSize: 30,
        color: 'white',
        marginTop: 5
    },
    heartIcon: {
        width: '44px',
        height: '44px',
        position: 'absolute',
        top: 40,
        right: 30
    },
  });
const PlaceReview = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();

return (
    <div>
        <div className='responsive-div' >
        <div style={{position: 'relative', width: '50%'}}>
            <img className={classes.destImg} src="./img/header/2npa94yu.png" alt=""/>
            <img className={classes.heartIcon} src="./img/header/heart-cog.png" alt=""/>
        </div>
            <div style={{textAlign: 'left', marginLeft: 20, display: 'Block', width: '75%'}}>
                <label style={{color: 'white', display: 'inline-block', fontSize: '30px', marginTop: '10px'}}><strong>Petronas Twin Towers</strong></label>
                <div>
                    <label style={{color: 'white', fontSize: '16px'}}>Jalan Cta 4b - See map<br></br>0.3km from kuala Lumpur</label>
                </div>
                <div>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/wifi.png"/>
                        <label>Free Wifi</label>
                    </div>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/parking.png"/>
                        <label>Parking</label>
                    </div>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/plane-inflight.png"/>
                        <label>Airport Transfers</label>
                    </div>
                </div>
                
                <div className={classes.bookBtn}>
                    <label className={classes.tripBtn} onClick={() => history.push('/intro')}>
                            Book
                            <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
                    </label>
                    <span className={classes.bookSpan}>
                        <strong>US$ 157.23</strong>
                        <p className={classes.bookP}>For 3 Nights, 1 Room</p>
                    </span>
                </div>
                
            </div>
        </div>
        <GrayLine/>
    </div>
)

}

export default PlaceReview
