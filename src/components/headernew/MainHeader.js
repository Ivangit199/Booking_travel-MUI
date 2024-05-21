import React, {useState} from "react"

import { makeStyles } from '@mui/styles';
import IconBrand from '../../components/common/IconBrand';
import { Media } from "reactstrap";
import SignUpButton from "./SignUpButton";

const useStyles = makeStyles({
    headDiv: {
        backgroundColor: 'black',
        display: 'inline-flex',
        color: 'white',
        width: '97%',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 50,
      
    },
    bookLable: {
        fontSize: 20,
        color: 'white',
        display: 'grid',
        width: '20%',
        marginRight: '20px'
    },

    headLab: {
        marginTop: '10px',
        width: '13%',
        '@media (max-width:  768px)' : {
            marginRight: 20
        }
    },

    headRadiusLab: {
        borderRadius: 20,
        borderStyle: 'groove',
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: '10PX'
    },
    
    settingLab: {
        marginTop: '10px',
        width: '22%'
    }
  });


const MainHead = () => {
    const [seenSignin, setSigninSeen] = useState(false)
    const [seenLogin, setLoginSeen] = useState(false)
    const classes = useStyles();
  
      function SignupPop () {
        setSigninSeen(!seenSignin);
      };
  
      function LoginPop () {
        setLoginSeen(!seenLogin);
    };
    return(
        <>
            <div className={classes.headDiv}>
                <IconBrand/>
                <div className={classes.bookLable}>
                    <label style={{marginBottom: '0px'}}>bookai.travel</label>
                    <label style={{fontSize: '12px'}}>POWERED BY AI</label>
                </div>
                <div className={classes.headLab}>
                    <label className={classes.bookLable} style={{fontSize: '14px', width: '100%'}}> CREATE YOUR ITINERARY</label>
                </div>
                <div className={classes.headLab}>
                    <label className={classes.bookLable} style={{fontSize: '14px', width: '100%'}}> BOOK STAYS</label>
                </div>
                <div className={classes.headLab}>
                    <label className={classes.bookLable} style={{fontSize: '14px', width: '100%'}}> BOOK FLIGHTS</label>
                </div>
                <div className={classes.headLab}>
                    <label className={classes.bookLable} style={{fontSize: '14px', width: '100%'}}> BOOK ACTIVITIES</label>
                </div>
                <div className={classes.settingLab} style={{textAlign: 'right'}}>
                    <label className={classes.headRadiusLab} onClick={SignupPop}>SIGN-UP</label>
                    {seenSignin ? <SignUpButton toggle={SignupPop} /> : null}
                    <label className={classes.headRadiusLab} onClick={LoginPop}>LOG-IN</label>
                    <label className={classes.headRadiusLab}>
                    <img src="./img/header/setting-1.png" alt=""/>
                    </label>
                </div>
            </div>
            
        </>
    )
}

export default MainHead