import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    experienceBrand: {
        width: '100%',
        marginTop: 30
    },
    destinationImg: {
        display: 'grid',
        width: '25%',
        textAlign: "center",
    },
    destImg: {
        width: '95%',
        height: 'auto'
    },
    desLabel: {
        color: 'white',
        marginTop: 5,
        width: '40%',
        marginRight: 30,
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 20
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
        width: '60%',
        height: 116,
        backgroundColor: 'rgb(11, 60, 222)',
        color: 'white',
        borderRadius: 60,
        paddingLeft: 15,
        paddingTop: 20,
        fontSize: 30,
        marginTop: 20,
      },
      tripImg: {
        width: 72,
        height: 72,
        marginLeft: 40,
        cursor: 'pointer'
      }
});

const DestImg = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.experienceBrand} style={{position: 'relative'}}>
       <img className={classes.destImg} src="./img/header/2npa94yu.png" alt=""/>
       <div style={{marginTop: '-40px'}}>
        <label className={classes.desLabel}> {children}</label>
            <img className={classes.heartIcon} src="./img/header/heart-cog.png" alt=""/>
       </div>
    </div>
  )
}

export default DestImg

