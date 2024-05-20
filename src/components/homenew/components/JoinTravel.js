import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    joinTravel: {
        display: 'inline-flex',
        marginTop: 100,
        marginLeft: 100,
        marginRight: 100,
        marginBottom: 100,
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
        '@media (max-width: 768px)': {
          display: 'grid',
        },
      },
      
      joinLabel: {
        width: '30%',
        '@media (max-width: 768px)': {
          width: '100%',
        },
      },

      joinImg: {
        width: '100%',
        height: 'auto',
      },

      joinImgLabel: {
        width: '23%',
        height: 233,
        marginRight: 10,
        
      }
});

const JoinTavel = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.joinTravel}>
        <label className={classes.joinLabel}>Join Our Travel Community</label>
        <div style={{width: '100%'}}>
          <label className={classes.joinImgLabel}><img className={classes.joinImg} src="./img/header/join-icon1.png" alt=""/></label>
          <label className={classes.joinImgLabel}><img className={classes.joinImg} src="./img/header/join-icon2.png" alt=""/></label>
          <label className={classes.joinImgLabel}><img className={classes.joinImg} src="./img/header/join-icon3.png" alt=""/></label>
          <label className={classes.joinImgLabel}><img className={classes.joinImg} src="./img/header/join-icon4.png" alt=""/></label>
        </div>
       
    </div> 
  )
}

export default JoinTavel
