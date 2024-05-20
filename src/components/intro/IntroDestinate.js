import React from 'react'
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import StarIcon from '@mui/icons-material/Star';
import { Rating } from '@mui/material';


const useStyles = makeStyles({
  introDestinate: {
    
  },

  bigLabel: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  mediumLabel: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  mapBtn: {
    backgroundColor: 'rgb(2,148,233)',
    fontSize: 16,
    color: 'white',
    borderRadius: 20,
    borderStyle: 'none',
    marginLeft: 10
  },
  ratingLabel: {
    backgroundColor: 'rgb(2,148,233)',
    color: 'white',
    width: '65%',
    fontSize: 16,
    borderRadius: 20,
    paddingLeft: 20,
    display: 'inline-flex',
    height: 30
  },
  ratingSize: {
    fontSize: 16,
  }

});

const IntroDestinate = ({ content }) => {
  const classes = useStyles();
  return (
      <div>
        <div className='intro-main-div'>
            <div style={{display: 'grid'}}>
                <label className={classes.bigLabel}>
                    Sama-Sama Hotel, KL Inetrnational Airport
                </label>
                <label className={classes.mediumLabel}>
                    Jalan Cta, 4b, Sepang, Malasya
                    <button className={classes.mapBtn}>
                        Map
                        <ArrowOutwardIcon />
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
export default IntroDestinate
