import React from 'react'
import { makeStyles } from '@mui/styles';
import MainLabel from './MainLabel'
import SelectLabel from './SelectLabel';
import SpanLabel from './SpanLabel';

const useStyles = makeStyles({
    personalDetail: {

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

const PersonalDetail = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.personalDetail}>
            <ul class="nav nav-pills mb-3 row" id="pills-tab" role="tablist" style={{marginBottom: '0px !important', paddingLeft: 0, marginLeft: 0, width: '100%'}}>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '30%'}}>
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Perspnal Detail</button>
                </li>
                <li class="nav-item col-6 p-0" role="presentation" style={{width: '70%'}}>
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Settings</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent" style={{border: '1px solid white', marginTop: '-17px', padding: 20}}>
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{borderRadius: '50px'}}>
                    <div className={classes.inlineDiv}>
                        <MainLabel children="Title"/>
                        <MainLabel children="First Name"/>
                        <MainLabel children="Last Name"/>
                    </div>
                    <div className={classes.inlineDiv}>
                        <SelectLabel children="Nationality" content="Select your Country"/>
                        <MainLabel children="Phone Number"/>
                    </div>
                    <div className={classes.mainLabel}>
                        <label style={{ marginLeft:20}}>Address</label>
                        <label className={classes.disabledInput}></label>
                    </div>
                    <div className={classes.inlineDiv}>
                        <MainLabel children="City"/>
                        <MainLabel children="Zipxode"/>
                        <MainLabel children="Birthday"/>
                    </div>
                    <div className={classes.inlineDiv}>
                        <SelectLabel children="Passport or ID Details Document Type" content="Passport"/>
                        <SelectLabel children="Issued ny" content="Issued by"/>
                        <MainLabel children="Passport Expireation"/>
                        <MainLabel children="Passport Number"/>
                    </div>
                    <button className={classes.saveBtn}>Save Changes</button>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"  style={{borderRadius: '50px'}}>
                    <SpanLabel children="Current Email" content="sample.com"/>
                    <SpanLabel children="Password" content="*********"/>
                    <button className={classes.saveBtn}>Save Changes</button>
                </div>
            </div>
            
            
        </div>
  )

}

export default PersonalDetail
