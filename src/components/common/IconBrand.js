import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cryptoImg: {
        width: '45px',
        height: 'auto',
        marginRight: '10px',
        '@media (max-width:  768px)' : {
          display: 'none'
      }
    },
});

const IconBrand = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
        <img src="./img/Main Logo.png" alt="" className={classes.cryptoImg}/>
        {children}
    </div>
  )
}

export default IconBrand
