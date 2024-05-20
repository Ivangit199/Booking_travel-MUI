import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    spaceBar: {
       marginTop: 50,
       backgroundColor: 'rgb(1, 113, 255)',
       fontSize: 100,
       color: 'white',
       textAlign: 'center',
       height: 230,
      },
});

const SpaceBar = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.spaceBar}>
        <label style={{paddingTop: 40}}>AdSpace</label>
    </div> 
  )
}

export default SpaceBar
