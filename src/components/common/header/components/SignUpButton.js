import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';

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

  mainDiv: {
    display: 'inline-flex',
    width: '100%',
  },

  loginInput: {
    borderRadius: '15x !important',
    fontSize: '30px',
    paddingLeft: '15px',
    borderColor: 'rgb(131, 13, 131)'
  },
  tripImg: {
    position: 'absolute',
    width: 50,
    height: 'auto'
  }
});

const SignUpButton = ({ toggle }) => {
  const classes = useStyles();
  const history = useHistory();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  function handleSignin(e) {
    e.preventDefault();
    history.push('/')
    toggle();
  }


  return (
    <div className="popup">
      <div className="popup-inner input-modal">
        <div>
          <h2 style={{marginBottom: '30px', textAlign: 'left'}}>Login | Rester</h2>
          <div className={classes.mainDiv}>
            <form onSubmit={handleSignin} style={{width: '45%'}}>
            <label>
                <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', borderColor: 'white', backgroundColor: 'black'}} type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='First Name'/>
            </label>
            <label>
                <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', borderColor: 'white', backgroundColor: 'black'}} type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Last Name'/>
            </label>
            <label>
                <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', borderColor: 'white', backgroundColor: 'black'}} type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-Mail'/>
            </label>
            <label>
                <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', borderColor: 'white', backgroundColor: 'black'}} type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            </label>
            <label>
                <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', borderColor: 'white', backgroundColor: 'black'}} type="text" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder='Re-Enter Password'/>
            </label>
            <button type='submit' className='btn-blue' >Register
              <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
            </button>
            </form>
          </div>
        {/* <button onClick={toggle}>Close</button> */}
        </div>
        <div>
          <label style={{fontSize: 24, width: '45%'}}>By Clicking 'Register', you accept the terms of Use and Privacy Policy</label>
        </div>
        
      </div>
    </div>
  );
};

export default SignUpButton;
