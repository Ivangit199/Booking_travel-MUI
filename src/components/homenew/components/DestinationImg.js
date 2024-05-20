import React from 'react'
import { makeStyles } from '@mui/styles';
import HeartImg from './HeartImg';

const useStyles = makeStyles({
    destinationImg: {
        display: 'grid',
        width: '25%',
        textAlign: "center",
        '@media (max-width: 768px)': {
          width: '33%'
      }
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
    bookSymbol: {
        display: 'inline-flex',
        cursor: 'pointer',
        marginTop: 30,
      },
      tripBtn: {
        width: 570,
        height: 116,
        backgroundColor: 'rgb(11, 60, 222)',
        color: 'white',
        borderRadius: 60,
        paddingLeft: 30,
        paddingTop: 20,
        fontSize: 40
      },
      tripImg: {
        width: 72,
        height: 72,
        marginLeft: 300,
        cursor: 'pointer'
      }
});

const DestinationImg = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.destinationImg}>
        <div style={{position: 'relative'}}>
            <img className={classes.destImg} src="./img/header/2npa94yu.png" alt=""/>
            <label className={classes.desLabel}> 7 DAY TRIP ADVETURE IN MALAYSIA</label>
            <img className={classes.heartIcon} src="./img/header/heart-cog.png" alt=""/>
        </div>
        
        
       
    </div>
  )
}

export default DestinationImg
