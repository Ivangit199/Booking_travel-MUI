import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    imgDiv: {
        backgroundColor: 'rgb(2, 148, 233)',
        borderRadius: 20,
        width: '50%',
        height: 'auto',
        '@media (max-width: 768px)': {
          display: 'none', // Hide the element on screens with a maximum width of 768px
        },
    },
});

const ImgDiv = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.imgDiv}>
      {children}
    </div>
  )

}

export default ImgDiv
