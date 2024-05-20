import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    bookTop: {
        display: 'grid',
        width: '25%',
        '@media (max-width: 768px)': {
            display: 'none'
        }
    },
    bookLabel: {
        fontSize: '60px',
        color: 'white',
        fontWeight: 'bold',
        '@media (max-width: 768px)': {
            fontSize: '20px'
        }
    },
    bookImg: {
        width: 160,
        height: 160
    }
});

const BookTop = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.bookTop}>
        <label>
            <span className={classes.bookLabel}>Book top destinations an instant</span>
        </label>
        <img className={classes.bookImg} src="./img/header/airplane-black.png" alt=""/>
    </div>
  )
}

export default BookTop
