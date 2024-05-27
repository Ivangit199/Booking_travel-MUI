import React from 'react'
import { makeStyles, styled } from '@mui/styles';
import CreditTable from './CreditTable';

const useStyles = makeStyles({
    creditSummary: {
        padding: 30,
        fontSize: 20,
        color: 'white',
  },
  
});

const CreditSummary = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.creditSummary}>
        <CreditTable/>
        
    </div>
  )

}

export default CreditSummary
