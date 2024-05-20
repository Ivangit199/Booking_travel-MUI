import React from 'react'
import { makeStyles } from '@mui/styles';
import HeartImg from './HeartImg';
import ExperienceImg from './ExperienceImg';

const useStyles = makeStyles({
    experienceTravel: {
        fontSize: 80,
        color: 'white',
        textAlign: 'center',

    },
    expiv: {
      display: 'inline-flex',
      marginLeft: '10%',
      '@media (max-width: 768px)': {
        marginLeft: 20
      },

    }
});

const ExperienceTravel = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.experienceTravel}>
        <div >
            Experience the freedom of travel
        </div>
        <div className={classes.expiv}>
          <ExperienceImg/>
          <ExperienceImg/>
          <ExperienceImg/>
        </div>
        
       
    </div>
  )
}

export default ExperienceTravel
