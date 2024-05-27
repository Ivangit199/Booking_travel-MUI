import React from 'react'
import { makeStyles } from '@mui/styles';
import GrayLine from '../../GrayLine';

const useStyles = makeStyles({
    mainRegister: {
        paddingTop: 20,
        width: '60%',
        border: '1px solid white',
        borderRadius: 30
    },
    regisLabel: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        width: '100%'
    },
    regisDiv: {
        backgroundColor: 'black',
        padding: 20,
        borderBottom: 0,
        marginBottom: 20,
        color: 'white',
        fontSize: 24,
    },
    regisSmallFont: {
        fontSize: 16
    },
    inputDiv: {
        width: '29%',
        display: 'inline-block',
        marginRight: 30,
    },
    regisInput : {
        width: '100%',
        backgroundColor: 'black',
        border: '1px solid white',
        borderRadius: 5,
    },
    bookInput: {
        backgroundColor: 'black',
        padding: 20,
        width: 'calc(65% - 30px)',
        border: '1px solid white',
        borderRadius: 5,
        height: 150,
        color: 'white',
        fontSize: 20,
        marginRight: '5%'
    },
    tripBtn: {
        width: '230px',
        height: 80,
        backgroundColor: 'rgb(10, 59, 205)',
        color: 'white',
        borderRadius: 40,
        paddingLeft: 30,
        paddingTop: 10,
        fontSize: 20,
        marginTop: 23,
        marginTop: '70px',
        '@media (max-width: 768px)': {
          width: '90%',
          fontSize: 20
        },
      },
      tripImg: {
        width: 60,
        height: 60,
        marginLeft: '10px',
        cursor: 'pointer',
        '@media (max-width: 768px)': {
            marginLeft: '45%'
          },
      },
      whiteLine: {
        backgroundColor: 'white',
        width: '100%',
        height: '1px'
      }
});

const MainRegister = ({ goToPayment }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainRegister}>
        <div>
            <label className={classes.regisLabel}>
            <span style={{color: 'rgb(0,113,255)'}}>LOGIN</span>
                IF YOU'RE ALREADY REGISTERED
            </label>
            <div className={classes.whiteLine}></div>
        </div>
      
      <div className={classes.regisDiv}>
        <div style={{marginBottom: 50}}>
            <label style={{marginBottom: '-50px'}}><strong>Who's checking in</strong></label>
        </div>
       
        <div className={classes.inputDiv}>
            <label className={classes.regisSmallFont}>First name<span>*</span></label>
            <input type='text' className={classes.regisInput}/>
        </div>
        <div className={classes.inputDiv}>
            <label className={classes.regisSmallFont}>Last name<span>*</span></label>
            <input type='text' className={classes.regisInput}/>
        </div>
        <div className={classes.inputDiv}>
            <label className={classes.regisSmallFont}>Phone number<span>*</span></label>
            <input type='phone' className={classes.regisInput}/>
        </div>
        <div className={classes.inputDiv} style={{marginTop: 20}}>
            <label className={classes.regisSmallFont}>Email<span>*</span></label>
            <input type='email' className={classes.regisInput}/>
        </div>
        <div className={classes.inputDiv} style={{marginTop: 20}}>
            <label className={classes.regisSmallFont}>Retype Email<span>*</span></label>
            <input type='email' className={classes.regisInput}/>
        </div>
        <div className={classes.inputDiv} style={{marginTop: 20, textAlign: 'center'}}>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" style={{marginLeft: 20, marginTop: 30, backgroundColor: 'black', border: '1px solid white'}}/>
            <label style={{marginLeft: 60, marginTop: 25}}>Smoking Room</label>
        </div>
        <label style={{width: '65%', marginTop: 20, fontSize: 20}}>
            Requests are fulfilled on a first come, first served basis. We'll send yours right after you book.
        </label>
        <div>
            <label style={{fontSize: 20, marginTop: 20, marginLeft: 20}}>Special Request</label>
        </div>
        <div style={{width: '100%', display: 'inline-flex'}}>
            <textarea className={classes.bookInput} type='text'></textarea>
            <label className={classes.tripBtn} onClick={goToPayment}>
                <span >BOOK NOW</span>
                <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
            </label>
        </div>
      </div>
    </div>
  )
}

export default MainRegister
