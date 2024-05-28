import React from 'react'
import { makeStyles } from '@mui/styles';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const useStyles = makeStyles({
    selectLabel: {
        width: '22%',
        color: 'white',
        display: 'grid',
        marginRight: 20,
        fontSize: 16
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

const SelectLabel = ({ children, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.selectLabel}>
        <label style={{fontSize: 16, marginLeft:20}}>{children}</label>
        <select className={classes.disabledInput}>
        <option value="0">{content}</option>
        <option value="1">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="1">04</option>
        <option value="2">05</option>
        <option value="3">06</option>
        <option value="3">07</option>
    </select>
    </div>
  )
}
export default SelectLabel
