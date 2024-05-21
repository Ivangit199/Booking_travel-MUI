import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    radiusButton: {
      borderRadius: '20px !important',
      marginLeft: '10px !important',
      fontSize: '20px !important',
      color: 'black !important',
      backgroundColor: 'white !important',
      '@media (max-width: 768px)': {
        borderRadius: 'none', // Hide the element on screens with a maximum width of 768px
      },
    },
  });

const RadiusButton = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();

return (
    <Button variant="contained" className={classes.radiusButton} color="inherit" onClick={() => history.push('/booking')}>
        {children}
        
    </Button>
)
}
export default RadiusButton
