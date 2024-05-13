import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    hoverButton: {
      borderRadius: '20px !important',
      marginLeft: '10px !important',
      fontSize: '20px !important',
      color: 'white',
      backgroundColor: 'rgb(162,229,255) !important',
      '&:hover': {
        backgroundColor: 'rgb(2,148,233)', // Change color on hover
      },
    },
  });

const HoverButton = ({ children }) => {
    const classes = useStyles();

return (
    <Button variant="contained" className={classes.hoverButton} color="inherit">
        {children}
    </Button>
)

}

export default HoverButton
