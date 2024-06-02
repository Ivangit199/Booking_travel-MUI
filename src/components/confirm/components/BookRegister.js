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



const BookRegister = ({ goToPayment, hotelInfo, from, to, together}) => {
  const classes = useStyles();

  return (
    <div className={classes.bookRegister}>
      <MainRegister goToPayment={goToPayment}/>
      <DestInfo hotelInfo={hotelInfo} from={from} to={to} together={together}/>
    </div>
  )
}

export default BookRegister
