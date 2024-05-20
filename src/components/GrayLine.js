import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    grayLine: {
        backgroundColor: 'rgb(234,234,234)',
        height: 2,
        width: '100%',
        marginTop: 50
    },
});

const GrayLine = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.grayLine}>
    </div>
  )

}

export default GrayLine
