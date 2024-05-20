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
});

const SignUpButton = ({ toggle }) => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    // Code to handle login goes here
    toggle();
  }

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpButton;
