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
    display: 'inline-flex'
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
    height: 'auto',
    bottom: 5,
    right: 5,
    textAlign: 'left'
  },
  socialImg: {
    width: '100%',
    height: '70px',
    marginBottom: 20,
    marginLeft: 50
  },
  outImg: {
    position: 'absolute',
    width: 16,
    height: 36,
    right: 20
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
  const [pageIndicator, setPageIndicator] = useState('signin');
  function handleSignin(e) {
    e.preventDefault();
    history.push('/')
    toggle();
  }


  return (
    <div className="popup">
      <div className="popup-inner input-modal">
        {pageIndicator != "forget" &&<div>
          {(pageIndicator =="signin" || pageIndicator =="signup") && <h2 style={{marginBottom: '30px', textAlign: 'left', position: 'relative'}}><span onClick={()=>setPageIndicator("signin")}>Login</span> | <span onClick={()=>setPageIndicator('signup')}>Rigister</span><img className={classes.outImg} src="./img/assets/out.png" alt="" onClick={toggle}/></h2>}
            <div className={classes.mainDiv}>
              <div style={{width: '45%', textAlign: 'left'}}>
                <form onSubmit={handleSignin}>
                  {pageIndicator =="signup" ?(
                    
                    <><label>
                        <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', border: '1px solid white', backgroundColor: 'black'}} type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='First Name'/>
                    </label>
                    <label>
                        <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', border: '1px solid white', backgroundColor: 'black'}} type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder='Last Name'/>
                    </label>
                    </>
                    ): ""}
                    <label>
                        <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', border: '1px solid white', backgroundColor: 'black'}} type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-Mail'/>
                    </label>
                    <label>
                        <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', border: '1px solid white', backgroundColor: 'black'}} type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                    </label>
                    {pageIndicator =="signup" ?(
                    <label>
                        <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', border: '1px solid white', backgroundColor: 'black'}} type="text" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder='Re-Enter Password'/>
                    </label>): null}
                    {pageIndicator =="signin" ?(
                    <p style={{textAlign: 'left'}} onClick={()=>setPageIndicator("forget")}>Forgot Password?</p>):null}
                    <button type='submit' className='btn-blue' style={{textAlign: 'left' }}>
                      <span>
                        <strong>{pageIndicator === "signup" ? "REGISTER" : "LOGIN"}</strong>
                    </span>
                      <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/></button>
                    
                  </form>
                  {pageIndicator =="signup" ?(
                  <label style={{fontSize: 24, marginTop: 20, textAlign: 'left'}}>By Clicking 'Register', you accept the terms of Use and Privacy Policy</label>)
                  : 
                  (<label style={{fontSize: 24, marginTop: 20, textAlign: 'left'}}>By logging in,  'Register', you agree to abside by the terms of Use and Privacy Policy</label>)}
                <div>
              </div>
                
              
            </div>
            <div style={{width: '50%'}}>
              <img className={classes.socialImg} src="./img/assets/Layer 2.png" /> 
              <img className={classes.socialImg} src="./img/assets/Layer 3.png" /> 
              <img className={classes.socialImg} src="./img/assets/Layer 4.png" /> 
              <img className={classes.socialImg} src="./img/assets/Layer 5.png" /> 
              <img style={{marginTop: 50}} src="./img/assets/Group 191.png" /> 
            </div>
            
          </div>



        {/* <button onClick={toggle}>Close</button> */}
        </div>}
        
        {pageIndicator =="forget" && 
          <div style={{width: '100%', textAlign: 'center', padding: '200px'}}>
            <label style={{fontSize: 24}}>Please enter the email associated with your account</label>
            <label style={{width: '50%', marginLeft: '25%', marginTop: 20}}>
              <input style={{borderRadius: '15px', fontSize: '30px', paddingLeft: '15px', border: '1px solid white', backgroundColor: 'black'}} type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E-Mail'/>
            </label>
            <div style={{display: 'inline-flex'}}>
              <label style={{marginTop: 35, marginRight: 30}} onClick={()=>setPageIndicator("signin")}>BACK</label> 
              <button type='submit' className='btn-blue' style={{textAlign: 'left'}}>
                  <span>
                    <strong>Send Recovery Link</strong>
                </span>
                  <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/></button>
            
            </div>
          </div>}
          
      </div>
    </div>
  );
};

export default SignUpButton;
