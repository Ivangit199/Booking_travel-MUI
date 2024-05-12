import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    radiusButton: {
      borderRadius: '40px',
      backgroundColor: 'rgb(2,148,233)',
      paddingTop: '10px',
      paddingBottom: '10px',
      fontSize: '16px',
      margin: '10px'
    },
  });

const RadiusToolbar = ({ children }) => {
    const classes = useStyles();

return (
    <Toolbar variant="contained" className={classes.radiusButton}>
        {children}
    </Toolbar>
)

}

export default RadiusToolbar
