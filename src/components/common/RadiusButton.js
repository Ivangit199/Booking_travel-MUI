import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    radiusButton: {
      borderRadius: '20px !important',
      marginLeft: '10px !important',
      fontSize: '20px !important',
      color: 'black !important',
      backgroundColor: 'white !important',
    },
  });

const RadiusButton = ({ children }) => {
    const classes = useStyles();

return (
    <Button variant="contained" className={classes.radiusButton} color="inherit">
        {children}
    </Button>
)
}
export default RadiusButton
