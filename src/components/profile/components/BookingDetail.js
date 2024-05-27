import React from 'react'
import { makeStyles } from '@mui/styles';
import MainLabel from './MainLabel'
import SelectLabel from './SelectLabel';
import SpanLabel from './SpanLabel';
import Stay from './Stay';
import StayDetail from './StayDetail';
import FlightDetail from './FlightDetail'

const useStyles = makeStyles({
    bookDetail: {

  },
  inlineDiv: {
    display: 'inline-flex',
    width: '100%',
  },
  mainLabel: {
    width: '68%',
        color: 'white',
        display: 'grid',
        fontSize: 20,
        marginTop: 20
  },
  disabledInput: {
    width: '100%',
        backgroundColor: 'black',
        padding: 10,
        color: 'white',
        borderRadius: 7,
        border: '1px solid rgb(218,218,218)',
        fontSize: 20,
        height: 50
  },
  saveBtn: {
    backgroundColor: 'rgb(1,133,255)',
    width: '20%',
    height: 70,
    color: 'white',
    borderRadius: 10,
    marginTop: 20,
    borderStyle: 'none',
    cursor: 'pointer'
  }
  

});

const BookDetail = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.bookDetail}>
            <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist" style={{marginBottom: '0px !important', paddingLeft: 0, marginLeft: 0, width: '100%'}}>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '33%'}}>
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">STAYS</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '33%'}}>
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">FLIGHTS</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '33%'}}>
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">ACTIVITIES</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent" style={{border: '1px solid white', marginTop: '-17px', padding: 20}}>
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{borderRadius: '50px'}}>
                  <StayDetail/>
               </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"  style={{borderRadius: '50px'}}>
                   <FlightDetail/>
                </div>
            </div>
            
            
        </div>
  )

}

export default BookDetail
