import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bookSymbol: {
    display: 'inline-flex',
    cursor: 'pointer',
    marginTop: 30,
  },
  tripBtn: {
    width: 570,
    height: 116,
    backgroundColor: 'rgb(11, 60, 222)',
    color: 'white',
    borderRadius: 60,
    paddingLeft: 30,
    paddingTop: 20,
    fontSize: 40
  },
  tripImg: {
    width: 72,
    height: 72,
    marginLeft: 300,
    cursor: 'pointer'
  }
  
});

const BookLongSymbol = ({ children }) => {
  const classes = useStyles();

  return (
    <div style={{display: 'inline-flex', cursor: 'pointer', marginTop: '30px'}} className='d-flex justify-content-center'>
     <label className={classes.tripBtn}>
        Travel To
        <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
      </label>
      
    </div>
     
  )

}

export default BookLongSymbol
