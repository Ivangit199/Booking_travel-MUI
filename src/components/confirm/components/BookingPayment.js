import React from 'react'
import { makeStyles } from '@mui/styles';
import PaymentDetail from './PaymentDetail';
import DestInfo from './DestInfo';

const useStyles = makeStyles({
    bookingPayment: {
     padding: 50,
     width: '100%',
     display: 'inline-flex'
    },
});

const BookingPayment = ({ goToConfirmed, goToInfo }) => {
  const classes = useStyles();

  return (
    <div className={classes.bookingPayment}>
      <PaymentDetail goToConfirmed={goToConfirmed} goToInfo={goToInfo}/>
      <DestInfo/>
    </div>
  )
}

export default BookingPayment
