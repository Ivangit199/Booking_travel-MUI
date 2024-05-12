import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    introImg: {
        backgroundColor: 'rgb(2, 148, 233)',
        borderRadius: 20,
        width: '50%',
        height: 'auto'
    },
});

const IntroImg = ({ children }) => {
  const classes = useStyles();

  return (
    <label>
        <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
        <p>Germany</p>
  </label>
  )

}

export default IntroImg
