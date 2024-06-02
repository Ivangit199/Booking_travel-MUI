import React from 'react'
import { makeStyles } from '@mui/styles';
import GrayLine from '../../GrayLine';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const useStyles = makeStyles({
    bookingDetail: {
        border: '1px solid white',
        borderRadius: 30,
        padding: 20,
        width: '60%',
    },
    bigLabel: {
        fontSize: 30,
      },
    
      mediumLabel: {
        fontSize: 20,
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
        display: 'inline-flex',
        height: 30
      },
      ratingSize: {
        fontSize: 16,
      },
      bigLabel: {
        fontSize: 36,
      },
      destInfo: {
        display: 'grid',
        width: '60%',
        marginLeft: '20px', 
        textAlign: 'left'
      },
      bottomLine: {
        height: 1,
        backgroundColor: 'rgb(112,112,112)',
        width: '100%',
        marginTop: 20
      },
      paymentDetail: {
        border: '1px solid white',
        borderRadius: 5,
        width: '100%'
      }
    
});

const BookingDetail = ({ hotelInfo, from, to }) => {
  const classes = useStyles();
  return (
    <div style={{display: 'inline-flex', width: '100%', padding: 20, paddingTop: 50, color: 'white'}}>
        <div className={classes.bookingDetail}>
            <div className={classes.destInfo} style={{width: '80%'}}>
                <label className={classes.bigLabel}><strong>
                    {hotelInfo[0]} <br></br>{hotelInfo[1]}</strong>
                </label>
                <label className={classes.mediumLabel}>
                    {hotelInfo[2]}, {to}
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
            <div style={{width: '100%', marginTop: 50, paddingLeft: 20, display: 'grid'}}>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}>Order Number:</span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}>Guest Name:</span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}>Number of Rooms:</span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}>Number of Guests:</span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}></span><span style={{width: '30%', textAlign: 'left'}}><strong>Adults(1)Kids(2)</strong></span>
                </label>
                <div className={classes.bottomLine}>
                </div>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex', marginTop: 30}}>
                    <span style={{width: '70%'}}>Room Type:</span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}>Meal Type:</span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}>Amenities:</span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}></span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}></span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <label style={{width: '40%', fontSize: 20, display: 'inline-flex'}}>
                    <span style={{width: '70%'}}></span><span style={{width: '30%', textAlign: 'left'}}><strong>Details</strong></span>
                </label>
                <div style={{width: '70%', display: 'grid'}}>
                    <label style={{fontSize: 24, marginTop: 30}}><strong>Cancellation Policy:</strong></label>
                    <label>This booking is a Non-Refundable and cannot be modified, if you fail to arrive, you won't be given the refund. Be sure of your travel dates.</label>
                    <label style={{fontSize: 24, marginTop: 30}}><strong>Hotel Policy:</strong></label>
                    <label>Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail Detail </label>
                </div>
                
            </div>
        </div>
        <div className={classes.bookingDetail} style={{width: '40%', marginLeft: 30, fontSize: 20, display: 'grid', height: 600}}>
            <label className={classes.bigLabel}>
                <strong>Payment Completed</strong>
            </label>
            <label>Payment Details</label>
            <div className={classes.paymentDetail} style={{borderBottom: 0}}>
                <label style={{width: '100%', fontSize: 20, display: 'inline-flex', textAlign: 'left', marginTop: 10, marginLeft: 20}}>
                    <span style={{width: '60%'}}>Payment Method</span><span style={{width: '40%', textAlign: 'left'}}>ETH(Mainnet)</span>
                </label>
                <label style={{width: '100%', fontSize: 20, display: 'inline-flex', textAlign: 'left', marginTop: 10, marginLeft: 20}}>
                    <span style={{width: '70%'}}>Per Night</span><span style={{width: '30%', textAlign: 'left'}}>US$ 235</span>
                </label>
                <label style={{width: '100%', fontSize: 20, display: 'inline-flex', textAlign: 'left', marginTop: 10, marginLeft: 20}}>
                    <span style={{width: '70%'}}>1 Room X 3 nights</span><span style={{width: '30%', textAlign: 'left'}}>US$ 876</span>
                </label>
                <div className={classes.paymentDetail} style={{marginTop: 20}}>
                    <label style={{width: '100%', fontSize: 20, display: 'inline-flex', textAlign: 'left', marginTop: 10, marginLeft: 20}}>
                        <span style={{width: '70%'}}>Total Charge</span><span style={{width: '30%', textAlign: 'left'}}>In ETH</span>
                    </label>
                    <label style={{width: '100%', fontSize: 36, display: 'inline-flex', textAlign: 'left', marginTop: 10, marginLeft: 20, fontWeight: 'bold'}}>
                        <span style={{width: '70%'}}>US$ 3242.43</span><span style={{width: '30%', textAlign: 'left'}}>1.1 E</span>
                    </label>
                </div>
            </div>
            <label style={{marginTop: 30, marginLeft: 20}}>Need Help?</label>
            <label style={{fontSize: 16, marginLeft: 20, width: '80%', marginTop: 30}}>
                If you need assistance regarding this booking, please send us a message on *mail*
            </label>
        </div>
    </div>
    
  )
}

export default BookingDetail
