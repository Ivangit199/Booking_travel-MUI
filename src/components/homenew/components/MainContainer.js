import React from 'react'
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import BookSymbol from './BookSymbol';
import HeartImg from './HeartImg';
import GrayLine from '../../GrayLine';
import PaymentList from '../PaymentList';
import BookLongSymbol from './BookLongSymbol';
import BookTop from './BookTop';
import DestinationImg from './DestinationImg';
import CryptoList from './CryptoList';
import CraftIntro from './CraftIntro';
import JoinTavel from './JoinTravel';
import ExperienceTravel from './ExperienceTravel';
import ExperienceImg from './ExperienceImg';
import BookCrypto from './BookCrypto';
import ElevateAI from './ElevateAI';
import IntroDest from './IntroDest';
import SpaceBar from './SpaceBar';
import LiveCrypto from './LiveCrypto';

const useStyles = makeStyles({
  mainContainer: {
    backgroundColor: 'black',
    width: '100%',
    color: 'white'
  },
  introImg: {
    width: '100%',
    display: 'inline-flex',
    '@media (max-width: 768px)': {
      display: 'grid',
    },
  },
  introDiv: {
    width: '40%', 
    display: 'grid',
    marginRight: 50,
    fontWeight: 'bold',
    marginTop: '250px',
    '@media (max-width: 768px)': {
      width: '100%',
      marginTop: '0px'
    },
  }
});

const MainContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <div style={{paddingLeft: 30, paddingRight: 20}}>
        <div className={classes.introImg}>
          <div className={classes.introDiv}>
            <label style={{fontSize: 24}}>EMBARK ON YOUR NEXT ADVENTURE:</label>
            <label style={{fontSize: 80}}>Explore, Book, % Earn Rewards with Us!</label>
            <BookSymbol/>
          </div>
          <HeartImg/>
        </div>
        <GrayLine/>
        <PaymentList/>
        <GrayLine/>
        <BookLongSymbol/>
        <div style={{textAlign: 'center', fontSize: 40, marginTop: 20}}>TOP DESTINATION</div>
        <div style={{marginTop: 20, display: 'inline-flex', width: '100%'}}>
          <BookTop/>
          <DestinationImg/>
          <DestinationImg/>
          <DestinationImg/>
        </div>
      </div>
      <CryptoList/>
      <div style={{marginTop: 30}} className='d-flex justify-content-center'>
        <CraftIntro/> 
      </div>
      <JoinTavel/>
      <ExperienceTravel/>
      <BookCrypto/>
      <ElevateAI/>
      <IntroDest children={'Worldwide Destinations'}/>
      <IntroDest children={'Top Cities'}/>
      <IntroDest children={'Top Activites'}/>
      <SpaceBar/>
      <LiveCrypto/>
    </div>
  )
}

export default MainContainer
