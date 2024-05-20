import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cryptoList: {
        backgroundColor: 'rgb(1,133,255)',
        display: 'inline-flex',
        padding: 30, width: '100%',
        '@media (max-width:768px)': {
            paddingLeft: 10
        }

    },
    cryptoImg: {
        width: '50px',
        height: '50px'
    },
    cryptoDiv: {
        width: '10%',
        
    }
    
});

const CryptoList = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.cryptoList}>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Path 94.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/group 84.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Group 85.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Group 86.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Group 87.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Group 88.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Group 89.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Group 90.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Group 91.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Group 92.png" alt=""/>  
        </div>
        <div className={classes.cryptoDiv}>
            <img className={classes.cryptoImg} src="./img/header/Group 93.png" alt=""/>  
        </div>
        <div style={{width: '3%'}}>
            <img className={classes.cryptoImg} src="./img/header/Group 94.png" alt=""/>
        </div>

    </div>
  )
}

export default CryptoList
