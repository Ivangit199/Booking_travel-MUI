import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  payImg: {

  },
});

const PayImg = ({ children }) => {
  const classes = useStyles();

  const handlePayment = async (e) => {
    const plan = {
      price: 2000,
      type: '30 days'
    }
    try {
      console.log('sending...')
      const response = await fetch('https://1a4b-45-86-208-162.ngrok-free.app/api/payment/process', {
        method: 'POST',
        body: JSON.stringify({ plan, email: 'm@test.com' }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('okay')
      const res = await response.json()
      const redirect_url = res.url;
      // navigator(`${redirect_url}`)
      window.location.href = redirect_url
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <img className='img-pay' src="./img/Layer 2.png" onClick={handlePayment} />
      <img className='img-pay' src="./img/Layer 3.png" />
      <img className='img-pay' src="./img/Layer 4.png" />
      <img className='img-pay' src="./img/Layer 5.png" />
      <img className='img-pay' src="./img/Layer 6.png" />
      <img className='img-pay' src="./img/Layer 7.png" />
    </div>
  )

}

export default PayImg
