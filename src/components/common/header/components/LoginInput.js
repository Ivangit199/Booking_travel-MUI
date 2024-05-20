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
    width: '100%',
  },

  loginInput: {
    borderRadius: '15x !important',
    fontSize: '30px',
    paddingLeft: '15px',
    borderColor: 'rgb(131, 13, 131)'
  }
});

const SignUpButton = ({ toggle }) => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    history.push('/booking')
    toggle();
  }

  return (
    <div className="popup">
      <div className="popup-inner input-modal">
        <div>
          <h2 style={{marginBottom: '30px'}}>Login | Rester</h2>
          <div className={classes.mainDiv}>
            <form onSubmit={handleLogin}>
            
            <label>
                <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', borderColor: 'rgb(131,131,131'}} type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-Mail'/>
            </label>
            <label>
                <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', borderColor: 'rgb(131,131,131'}} type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            </label>
           
            <button type='submit' className='btn-blue' style={{backgroundColor: 'rgb(162,229, 255)', fontSize: 24, color: 'black', marginTop: 0, borderRadius: 10, height: '60px'}}>Login</button>
            </form>
          </div>
        {/* <button onClick={toggle}>Close</button> */}
        </div>
      </div>
    </div>
  );
};

export default SignUpButton;
