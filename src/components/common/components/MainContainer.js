import React from 'react'
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: 'black',
    padding: 50,
    width: '100%',
    minHeight: '100vh'
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