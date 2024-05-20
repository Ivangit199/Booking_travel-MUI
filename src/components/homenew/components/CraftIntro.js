import React from 'react'
import { makeStyles, withTheme } from '@mui/styles';
import HeartImg from './HeartImg';

const useStyles = makeStyles({
    craftIntro: {
        display: 'inline-flex',
        color: 'white',
        marginTop: 30,
        width: '100%',
        marginLeft: '50px',
        '@media (max-width: 768px)': {
            display: 'grid',
          },
        },
    craftImg: {
        width: '60%',
        height: 'auto',
        marginRight: 100,
        '@media (max-width: 768px)': {
           width: '98%',
          },
    },
    
    craftDiv: {
        display: 'grid'
    },

    bigFont: {
        fontSize: 80,
        fontWeight: 'bold'
    },

    supportImg: {
        marginRight: 20
    },

    craftLabel: {
        fontSize: 30
    }
});

const CraftIntro = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.craftIntro}>
        <img className={classes.craftImg} src="./img/header/Mask Group 2.png" alt=""/>
        <div className={classes.craftDiv}>
            <label className={classes.bigFont}>Crafted with Excellence!</label>
            <label className={classes.craftLabel}>
                <img className={classes.supportImg} src="./img/header/Group 65.png" alt=""/>
                24/7 customer Support
            </label>
            <label className={classes.craftLabel}>
                <img className={classes.supportImg} src="./img/header/Group 66.png" alt=""/>
                100+ Payment Options
            </label>
            <label className={classes.craftLabel}>
                <img className={classes.supportImg} src="./img/header/Group 67.png" alt=""/>
                100+ Payment Options
            </label>
            <label className={classes.craftLabel}>
                <img className={classes.supportImg} src="./img/header/Path 74.png" alt=""/>
                100+ Payment Options
            </label>
        </div>
    </div>
  )
}

export default CraftIntro
