import React from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useEffect, useRef, useState } from "react";

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

const ListNum = ({ getPeriod }) => {
    const classes = useStyles();
    const [period, setPeriod] = useState("");


return (
    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" className={classes.listNum} onChange={(e) => getPeriod(e.target.value)}>
        <option value="0">00</option>
        <option value="1">01</option>
        <option value="2">02</option>
        <option value="3">03</option>
        <option value="4">04</option>
        <option value="5">05</option>
        <option value="6">06</option>
        <option value="7">07</option>
    </select>
)

}

export default ListNum
