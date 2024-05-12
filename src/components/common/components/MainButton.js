import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    mainButton: {
      borderRadius: '20px !important',
      marginLeft: '10px !important',
      fontSize: '20px !important',
      color: 'black !important',
      backgroundColor: 'white',
      '&:hover': {
        backgroundColor: 'rgb(2,148,233)', // Change color on hover
      },
    },
  });

const MainButton = ({ children }) => {
    const classes = useStyles();

return (
    <Button variant="contained" className={classes.mainButton} color="inherit">
        {children}
    </Button>
)

}

export default MainButton
