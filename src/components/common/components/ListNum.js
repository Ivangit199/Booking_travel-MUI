import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    listNum: {
      marginLeft: '20px',
      marginRight: '20px',
      height: 50,
      borderRadius: '10px',
      borderStyle: 'none',
      width: 100,
      paddingLeft: 20
    },
  });

const ListNum = ({ children }) => {
    const classes = useStyles();

return (
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" className={classes.listNum}>
        <option value="1">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="1">04</option>
        <option value="2">05</option>
        <option value="3">06</option>
        <option value="3">07</option>
    </select>
)

}

export default ListNum
