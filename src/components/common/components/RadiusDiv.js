import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  radiusDiv: {
    backgroundColor: 'rgb(2,148,233)',
    padding: 30,
    borderRadius: 20,
    display:'inline-flex',
    width: 'calc(100% - 40px)',
    height: '850px',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 30,
    color: 'white',
    marginTop: 30
  },
});

const RadiusDiv = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.radiusDiv}>
      {children}
    </div>
  )

}

export default RadiusDiv
