import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    bookCrypto: {
      paddingTop: 50,
      paddingLeft: '20%',
      color: 'white',
      fontSize: 80,
      marginTop: 20,
      display: 'inline-flex',
      width: '100%'
    },
    logoImg: {
        width: '25%',
        marginRight: 20,
        marginTop: 50,
        '@media (max-width: 768px)': {
          display: 'none'
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
        fontSize: 27
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
      }

});
 
const ElevateAI = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.bookCrypto}>
        <img src="./img/Main Logo.png" alt="" className={classes.logoImg}/>
        <div className={classes.cryptoLabel}>
            <label>
            Elevate how you travel with AI
            </label>
            <label className={classes.tripBtn}>
                CREATE AN <br></br>INITERARY
                <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
            </label>
        </div>
      
    </div>
     
  )

}

export default ElevateAI
