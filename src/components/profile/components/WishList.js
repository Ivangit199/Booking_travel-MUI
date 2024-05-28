import React from 'react'
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import StarIcon from '@mui/icons-material/Star';
import { ImageList, Rating } from '@mui/material';

const useStyles = makeStyles({
    stayDetail: {
        padding: 20,
        width: '100%',
        display: 'inline-flex',
        color: 'white'
    },
    stayImg: {
      width: '250px',
      height: '250px',
      display: 'grid'
    },
    bigLabel: {
      fontSize: 30,
      fontWeight: 'bold'
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
      display: 'inline-flex',
      height: 30
    },
    ratingSize: {
      fontSize: 16,
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
      marginLeft: '20px', 
      textAlign: 'left'
    },
    checkLabel: {
      backgroundColor: 'black',
      color: 'white',
      fontSize: 16,
      width: '49%',
      height: 50,
      marginRight: 10,
      paddingLeft: 20,
      paddingTop: 10,
      borderRadius: 5,
      border: '1px solid white'
    },
    mainLabel: {
        fontSize: 16,
        width: '100%'
     },
     bookingDetail: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        border: '1px solid white',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 30
     },
    
});

const WishList = ({ children, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.bookingDetail}>
        <label className={classes.mainLabel}>View tour Wishlist here</label>
        <div style={{height: '1px', width: '100%',backgroundColor: 'white', marginTop: 5}}></div>
        <div className={classes.stayDetail}>
            <img src="./img/header/2npa94yu.png" alt="" className={classes.stayImg}/>
            <div className={classes.destInfo}>
                <label className={classes.bigLabel}>
                    Sama-Sama Hotel, KL<br></br>Inetrnational Airport
                </label>
                <label className={classes.mediumLabel}>
                    Jalan Cta, 4b, Sepang, Malasya
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
        </div>
        <div className={classes.stayDetail}>
            <img src="./img/header/2npa94yu.png" alt="" className={classes.stayImg}/>
            <div className={classes.destInfo}>
                <label className={classes.bigLabel}>
                    Sama-Sama Hotel, <br></br>KL Inetrnational Airport
                </label>
                <label className={classes.mediumLabel}>
                    Jalan Cta, 4b, Sepang, Malasya
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
        </div>
        <div className={classes.stayDetail}>
            <img src="./img/header/2npa94yu.png" alt="" className={classes.stayImg}/>
            <div className={classes.destInfo}>
                <label className={classes.bigLabel}>
                    Sama-Sama Hotel, <br></br>KL Inetrnational Airport
                </label>
                <label className={classes.mediumLabel}>
                    Jalan Cta, 4b, Sepang, Malasya
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
        </div>
    </div>
    
  )
}
export default WishList
