import React from 'react'
import { makeStyles } from '@mui/styles';
import HeartImg from './HeartImg';
import ExperienceImg from './ExperienceImg';
import DestImg from './DestImg';

const useStyles = makeStyles({
    experienceTravel: {
        fontSize: 80,
        color: 'white',
        textAlign: 'center',
        marginTop: 100
    },
    expiv: {
      display: 'inline-flex',
    }
});

const IntroDest = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.experienceTravel}>
        <div>
            {children}
        </div>
        <div className={classes.expiv}>
          <DestImg children={'Germany'}/>
          <DestImg children={'FRANCE'}/>
          <DestImg children={'SWEDEN'}/>
        </div>
        
       
    </div>
  )
}

export default IntroDest
