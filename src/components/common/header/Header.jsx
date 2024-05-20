import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactDOM from 'react-dom';
import { Button, IconButton, Typography} from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import { makeStyles } from '@mui/styles';
import RadiusButton from '../../common/RadiusButton'
import RadiusToolbar from '../../common/RadiusToolbar'
import { Label } from 'reactstrap'
import BlueAppbar from '../../common/BlueAppbar'
import IconBrand from '../../common/IconBrand';
import SignUpButton from './../header/components/SignUpButton';
import LoginInput from './../header/components/LoginInput';

const useStyles = makeStyles({
  radiusButton: {
    borderRadius: '20px !important',
    marginLeft: '10px !important',
    fontSize: '20px !important',
    color: 'black !important',
    backgroundColor: 'white !important',
    '@media (max-width: 768px)': {
      borderRadius: 'none', // Hide the element on screens with a maximum width of 768px
    },
  },
});

const Header = () => {
  const [seenSignin, setSigninSeen] = useState(false)
  const [seenLogin, setLoginSeen] = useState(false)
  const classes = useStyles();

    function SignupPop () {
      setSigninSeen(!seenSignin);
    };

    function LoginPop () {
      setLoginSeen(!seenLogin);
  };

  return (
      <BlueAppbar>
        <RadiusToolbar>
          <IconBrand/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <label> bookai.travel</label>
          </Typography>
          {/* <SignUpButton children="Sign-up">
          </SignUpButton> */}
          <div>
            <Button variant="contained" className={classes.radiusButton} color="inherit" onClick={SignupPop}>Sign-Up</Button>
            {seenSignin ? <SignUpButton toggle={SignupPop} /> : null}
          </div>  
          <div>
            <Button variant="contained" className={classes.radiusButton} color="inherit" onClick={LoginPop}>Log-In</Button>
            {seenLogin ? <LoginInput toggle={LoginPop} /> : null}
          </div> 
        </RadiusToolbar>
      </BlueAppbar>
  )
}

export default Header
