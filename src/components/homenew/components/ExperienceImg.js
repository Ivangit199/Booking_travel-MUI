import React from 'react'
import { makeStyles } from '@mui/styles';
import ExperienceBrand from './ExperienceBrand';

const useStyles = makeStyles({
    experienceImg: {
        width: '30% ',
        
    },
});

const ExperienceImg = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.experienceImg}>
       <ExperienceBrand/>
    </div>
  )
}

export default ExperienceImg
