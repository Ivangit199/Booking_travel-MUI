import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bookSymbol: {
    display: 'inline-flex',
    cursor: 'pointer',
    textAlign: 'left',
    marginTop: 30
  },
  tripBtn: {
    width: 305,
    height: 116,
    backgroundColor: 'rgb(11, 60, 222)',
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
  }
  
});

const BookSymbol = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.bookSymbol}>
     <label className={classes.tripBtn}>
        BOOK YOUR <br></br>TRIP NOW
        <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
      </label>
      
    </div>
     
  )

}

export default BookSymbol
