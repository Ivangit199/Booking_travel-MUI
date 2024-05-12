import React from 'react'
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';

const useStyles = makeStyles({
    radiusLabel: {
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 30,
    fontSize:20,
    color: 'black',
    height: '50',
    display: 'inline-flex',
    paddingLeft: 20,
    paddingRight: 20
  },
});

const RadiusLabel = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.radiusLabel}>
      {children}
    </div>
  )

}

export default RadiusLabel
