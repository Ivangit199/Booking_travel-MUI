import React from 'react'
import { makeStyles } from '@mui/styles';
import MainRegister from './MainRegister';
import DestInfo from './DestInfo';

const useStyles = makeStyles({
  bookRegister: {
     padding: 50,
     width: '100%',
     display: 'inline-flex'
    },
});



const BookRegister = ({ goToPayment}) => {
  const classes = useStyles();

  return (
    <div className={classes.bookRegister}>
      <MainRegister goToPayment={goToPayment}/>
      <DestInfo/>
    </div>
  )
}

export default BookRegister
