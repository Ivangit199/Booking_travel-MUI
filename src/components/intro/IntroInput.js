import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  introInput: {
    background: 'white',
    fontSize: 16,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    width: '50%',
    borderRadius: 7,
    marginRight: 20,
  },

});

const IntroInput = ({ content }) => {
  const classes = useStyles();

  return (
    
      <label className={classes.introInput}>
        {content}
        </label>
  )
}
export default IntroInput
