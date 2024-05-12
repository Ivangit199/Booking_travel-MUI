import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cryptoList: {
       
    },
});

const CryptoList = ({ children }) => {
  const classes = useStyles();

  return (
    <div className='bottom-crytp'>
        <img className='bottom-curr' src="./img/BlueLogos/Group 79.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 78.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 77.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 76.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 75.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 74.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 73.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 72.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 71.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 70.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 69.png" /> 
        <img className='bottom-curr' src="./img/BlueLogos/Group 68.png" /> 
      </div>
  )

}

export default CryptoList
