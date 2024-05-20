import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    topText: {
        backgroundColor: 'rgb(1,133,255)',
        width: '100%'
    }
  });

const TopText = () => {
    const classes = useStyles();  
    return(
        <div style={{backgroundColor: 'rgb(1,133,255', width: '100%', color: 'white', padding: 5}} className='d-flex justify-content-center'>
            <div>EXCLUSIVE LIMITED PARTNERSHIP: <span><strong>EARN $BOOK WHEN YOU BOOK YOUR HOLIDAY</strong></span></div>
        </div>
        
    )
}

export default TopText