import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cryptoImg: {
       
    },
});

const CryptoImg = ({ children }) => {
  const classes = useStyles();

  return (
    <div >
        <img className='img-curr' src="./img/cryptocurrencies/bch.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/eth.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/sol.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/usdt.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bnb.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/bcio.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/usdc.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/xrp.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/avax.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/doge.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/trx.png" /> 
        <img className='img-curr' src="./img/cryptocurrencies/gxs.png" /> 
    </div>
  )

}

export default CryptoImg
