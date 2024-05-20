import React from 'react'
import { makeStyles } from '@mui/styles';
import IntroInput from './IntroInput';

const useStyles = makeStyles({
  introTop: {
    marginTop: 30,
    display: 'inline-flex' ,
    width: '100%'  
  },
  introInput: {
    background: 'white',
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    width: '50%',
    borderRadius: 7,
    marginRight: 20,
  },

});

const IntroTop = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.introTop}>
        <label className={classes.introInput} style={{width: '50%'}}>
            Stay: Sama-Sama Hotel, KL Inetrnational Airport
        </label>
        <label className={classes.introInput} style={{width: '15%'}}>
            From
        </label>
        <label className={classes.introInput} style={{width: '15%'}}>
            To
        </label>
        <label className={classes.introInput} style={{width: '16%', marginRight: 0}}>
            2 Adults 1 Child
        </label>
    </div>
  )

}

export default IntroTop
