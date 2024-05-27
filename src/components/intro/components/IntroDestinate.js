import React from 'react'
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import StarIcon from '@mui/icons-material/Star';
import { ImageList, Rating } from '@mui/material';
import IntroList from './IntroList';


const useStyles = makeStyles({
  introDestinate: {
    
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
    paddingLeft: 20,
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
  tripBtn: {
    width: '50%',
    height: 80,
    backgroundColor: 'rgb(11, 60, 222)',
    color: 'white',
    borderRadius: 40,
    paddingLeft: 30,
    paddingTop: 10,
    fontSize: 20,
    marginTop: 23,
    '@media (max-width: 768px)': {
      width: '90%',
      fontSize: 20
    },
  },
  tripImg: {
    width: 60,
    height: 60,
    marginLeft: '30px',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
        marginLeft: '45%'
      },
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
    marginRight: '10%', 
  }

});

const IntroDestinate = ({ content }) => {
  const classes = useStyles();
  return (
      <div>
        <div className={classes.introMainDiv}>
            <div className={classes.destInfo}>
                <label className={classes.bigLabel}>
                    Sama-Sama Hotel, KL Inetrnational Airport
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
            <div className={classes.bookBtn}>
            <span className={classes.bookSpan}>
                  FROM<strong>US$ 71.86</strong>
                  <p className={classes.bookP}> <strong>US$215.58</strong> FOR 3 NIGHTS, 1 ROOM</p>
            </span>
            <label className={classes.tripBtn}>
              <span >BOOK NOW</span>
              <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
            </label>
                
            </div>
        </div>
        <IntroList/>
      </div>
  )
}
export default IntroDestinate
