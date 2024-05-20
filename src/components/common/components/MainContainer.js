import React from 'react'
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: 'black',
    padding: 10,
    width: '100vw',
  },
});

const MainContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      {children}
    </div>
  )

}

export default MainContainer