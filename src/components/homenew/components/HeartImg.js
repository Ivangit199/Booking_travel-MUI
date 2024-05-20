import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  heartDiv: {
    position: 'relative',
    width: '58%'
  },
  heartImg: {
    width: '100%',
    height: 'auto',
    '@media (max-width: 768px)': {
      width: '90vw',
      height: 'auto'
    },
  },
  heartIcon: {
    width: '44px',
    height: '44px',
    position: 'absolute',
    top: 40,
    right: 30,
    '@media (max-width: 768px)': {
      right: 0,
      left: '80vw'
    }
  }
  
  
});

const HeartImg = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.heartDiv}>
        <img className={classes.heartImg} src="./img/header/Mask Group 1.png" alt=""/>
        <img className={classes.heartIcon} src="./img/header/heart-cog.png" alt=""/>
    </div> 
  )
}

export default HeartImg
