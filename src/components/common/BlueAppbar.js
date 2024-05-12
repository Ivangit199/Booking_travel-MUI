import React from 'react'
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  blueAppbar: {
    backgroundColor: 'rgb(174,226,241) !important',
    padding: 10,
    height: 100
  },
});

/**
 * 
 * variant="contained" 
 *  
 */
const BlueAppbar = ({ children }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.blueAppbar}>
      {children}
    </AppBar>
  )

}

export default BlueAppbar
