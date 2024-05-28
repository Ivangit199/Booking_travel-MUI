import React from 'react'
import { makeStyles } from '@mui/styles';
import CreditAmount from './CreditAmount';
import CreditSummary from './CreditSummary';
import CreditCard from './CreditCard';

const useStyles = makeStyles({
    CreditDetail: {

  },
});

const CreditDetail = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.creditDetail}>
            <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist" style={{marginBottom: '0px !important', paddingLeft: 0, marginLeft: 0, width: '100%'}}>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '33%'}}>
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">BUY TRAVEL CREDITS</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '33%'}}>
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SUMMARY</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '34%'}}>
                    <button class="nav-link" id="pills-card-tab" data-bs-toggle="pill" data-bs-target="#pills-card" type="button" role="tab" aria-controls="pills-card" aria-selected="false">REDEEM GIFT CARDS</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent" style={{border: '1px solid white', marginTop: '-17px', padding: 20}}>
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{borderRadius: '50px'}}>
                  <CreditAmount/>
               </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"  style={{borderRadius: '50px'}}>
                   <CreditSummary/>
                </div>
                <div class="tab-pane fade" id="pills-card" role="tabpanel" aria-labelledby="pills-card-tab"  style={{borderRadius: '50px'}}>
                   <CreditCard/>
                </div>
            </div>
            
            
        </div>
  )

}

export default CreditDetail
