import React from 'react'
import { makeStyles } from '@mui/styles';
import MainLabel from './MainLabel'
import SelectLabel from './SelectLabel';
import SpanLabel from './SpanLabel';
import StayDetail from './StayDetail'
import { useState } from 'react';
const useStyles = makeStyles({
    
    bookingDetail: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        border: '1px solid white',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 30
     },
     mainLabel: {
        fontSize: 16,
        width: '100%'
     },
     disabledInput: {
        width: '25%',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
        borderRadius: 7,
        border: '1px solid rgb(218,218,218)',
        height: 50,
        marginTop: 20,
        marginLeft: '35%',
        cursor: 'pointer'
     }

});

const Stay = ({ children }) => {
  const classes = useStyles();
 const [page,setPage] = useState("")
  return (
    <div className={classes.bookingDetail}>
         <label className={classes.mainLabel}>View your bookings here {page=="stays"&& "-Stays"}</label>
         <div style={{height: '1px', width: '100%',backgroundColor: 'white', marginTop: 5}}></div>
         {page =="stays" ? <div><StayDetail/></div>: <div style={{width: '100%', marginTop: 30, display: 'grid', textAlign: 'center'}}>
               <label className={classes.disabledInput}>Flights</label>
               <label className={classes.disabledInput} onClick={()=>setPage("stays")}>Stays</label>
               <label className={classes.disabledInput}>Activities</label>
         </div>}
    </div>
  )

}

export default Stay
