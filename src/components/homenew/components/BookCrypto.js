import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    bookCrypto: {
      backgroundColor: 'rgb(1,133,255)',
      paddingTop: 100,
      paddingLeft: 50,
      paddingRight: 100,
      color: 'white',
      fontSize: 80,
      marginTop: 20,
      display: 'inline-flex',
      width: '100%',
    
      '@media (max-width: 768px)': {
       fontSize: 60,
       display: 'grid'
      },
    },
    cryptoLabel: {
      fontSize: 100,
      width: '50%',
      marginRight: '10%',
      '@media (max-width: 768px)': {
        width: '100%'
      },
    },
    tripBtn: {
      width: 305,
      height: 116,
      backgroundColor: 'rgb(10, 59, 205)',
      color: 'white',
      borderRadius: 60,
      paddingLeft: 30,
      paddingTop: 20,
      fontSize: 27,
      
    },
    tripImg: {
      width: 72,
      height: 72,
      marginTop: '-60px',
      marginLeft: 50,
      cursor: 'pointer'
    },
    cryptoDiv: {
      width: '40%',
      textAlign: 'right'
    },
    cryptoImg: {
      width:'90px',
      height: '90px',
      marginLeft: '20%',
      marginBottom: 150,
      '@media (max-width: 768px)': {
        marginLeft: '15%'
      },
    },
    cryptolist: {
      width: '40%',
      '@media (max-width: 768px)': {
        width: '100%'
      },
    }
    
});
 
const BookCrypto = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.bookCrypto}>
      <div className={classes.cryptoLabel}>
        <label>
          Exclusive Rewards and NT's with every Booking!
        </label>
        <label className={classes.tripBtn}>
          BOOK YOUR <br></br>TRIP NOW
          <img className={classes.tripImg} src="./img/header/round-arrow.png" alt=""/>
        </label>
      </div>
      <div>
        <img className={classes.cryptoImg} src="./img/header/Path 94.png" alt=""/>  
        <img className={classes.cryptoImg} src="./img/header/Group 84.png" alt=""/>  
        <img className={classes.cryptoImg} src="./img/header/Group 85.png" alt=""/>  
        <img className={classes.cryptoImg} src="./img/header/Group 86.png" alt=""/>  
        <img className={classes.cryptoImg} src="./img/header/Group 87.png" alt=""/>  
        <img className={classes.cryptoImg} src="./img/header/Group 88.png" alt=""/>  
        <img className={classes.cryptoImg} src="./img/header/Group 89.png" alt=""/>  
        <img className={classes.cryptoImg} src="./img/header/Group 92.png" alt=""/>  
        <img className={classes.cryptoImg} src="./img/header/Group 93.png" alt=""/>  
      </div>
    </div>
     
  )

}

export default BookCrypto
