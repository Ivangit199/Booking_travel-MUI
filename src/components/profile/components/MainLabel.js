import React from 'react'
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const useStyles = makeStyles({
    mainLabel: {
        width: '22%',
        color: 'white',
        display: 'grid',
        marginRight: 20,
        fontSize: 16,
    },
    disabledInput: {
        width: '100%',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
        borderRadius: 7,
        border: '1px solid rgb(218,218,218)',
        height: 50
    },
});

const   MainLabel = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainLabel}>
        <label style={{marginLeft:20}}>{children}</label>
        <label className={classes.disabledInput}></label>
    </div>
  )
}
export default MainLabel
