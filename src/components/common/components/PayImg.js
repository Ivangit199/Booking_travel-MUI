import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    payImg: {
       
    },
});

const PayImg = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
        <img className='img-pay' src="./img/Layer 2.png" /> 
        <img className='img-pay' src="./img/Layer 3.png" /> 
        <img className='img-pay' src="./img/Layer 4.png" /> 
        <img className='img-pay' src="./img/Layer 5.png" /> 
        <img className='img-pay' src="./img/Layer 6.png" /> 
        <img className='img-pay' src="./img/Layer 7.png" /> 
    </div>
  )

}

export default PayImg
