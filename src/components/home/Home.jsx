import React from 'react'
import MainConrainer from '../common/components/MainContainer'
import RadiusDiv from '../common/components/RadiusDiv'
import RadiusLabel from '../common/components/RadiusLabel'
import { Icon, IconButton, Rating } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Block } from '@mui/icons-material'
import ImgDiv from '../common/components/ImgDiv'
import MainButton from '../common/RadiusButton'
import CaroselImg from '../common/components/CaroselImg'
import PayImg from '../common/components/PayImg'
import CryptoImg from '../common/components/CryptoImg'
import IntroImg from '../common/components/IntroImg'
import CryptoList from '../common/components/CryptoList'

const handleClick = () => {
  console.log('Button clicked!');
  // You can add any logic or state changes here
};

const Home = () => {
  return (
    <div>
      <MainConrainer>
        <RadiusDiv>
          <div style={{color: 'white', width: '60vw'}}>
            <label className='top-div'>
              Use Crypto to <br></br> Pay for Your <br></br> Dream Getaway
            </label>
            <label style={{fontSize: 30, display: 'block'}}>
              POWERED BY AI & BLOCKCHAIN
            </label>
            <div style={{display: Block}}>
              <RadiusLabel>
                <p>Create your <br></br> litinerary with AI</p>
                <IconButton size="large">
                  <ArrowOutwardIcon />
                </IconButton>
              </RadiusLabel>
              </div>
              <div>
                <RadiusLabel>
                  <p style={{marginTop: 15, marginBottom: 25}}>Book Flight/Stay/Activities</p>
                  <IconButton size="large">
                    <ArrowOutwardIcon />
                  </IconButton>
                </RadiusLabel>
              </div>
          </div>
          <ImgDiv>
            <div>
              <CaroselImg />
            </div>
            <div style={{position: 'relative', bottom: 70, left: 20, fontSize: '1vw', color: 'white'}}>
              <label style={{display: 'inline-flex'}}> <Rating name="size-large" defaultValue={0} size="large" max={1} marginTop={5}/> <p style={{marginTop: '5px'}}>Ride the Dunes with your favourite dog in dubai</p></label>
            </div>
          </ImgDiv>
        </RadiusDiv>
        <div className="div-inline">
          <div className="radius-div">
            <div>
              <label style={{display: 'block'}}>Accepting Payments via Credit <br></br> Card, Debit Card, and <br></br> Cryptocurrency.</label>
            </div>
            <PayImg/>
          </div>
          <div className="radius-div">
            <div>
              <label style={{display: 'block'}}>List of Accepted <br></br> Cryptocurrencies </label>
            </div>
            <CryptoImg/>
            <div>
              <label className='white-label' style={{marginTop: 20}}>More Partnerships Incoming Soon</label>
            </div>
          </div>
        </div>
        <div className='div-setting'>
          <span className='pay-span' >
            <img className='icon-setting' src="./img/24 7 Support.png"/>
            <p className='p-setting'>24/7 Customer Support</p>          
          </span>
          <span className='pay-span'>
            <img className='icon-setting' src="./img/Payment Options.png"/>
            <p className='p-setting'>100+ Payment Options</p>          
          </span>
          <span className='pay-span'>
            <img className='icon-setting' src="./img/Rewards.png"/>
            <p className='p-setting'>Rewards and Discounts</p>          
          </span>
          <span className='pay-span'>
            <img className='icon-setting' src="./img/Best Price.png"/>
            <p className='p-setting'>Best Price Guaranteed</p>          
          </span>
        </div>
        <div className='intro-div'>
          <label style={{fontSize: 60}}>Experience the freedom and convenience of using crypto for all your travel needs.</label>
          <label style={{fontSize: 36, marginTop: 30}}>Worldwide Destinations</label>
          <div style={{marginTop: 20}}>
            <MainButton children="Dubai" className="hoverButton"> 
            </MainButton>
            <MainButton children="Sweden" className="hoverButton"> 
            </MainButton>
            <MainButton children="Australia" className="hoverButton"> 
            </MainButton>
            <MainButton children="Turkey" className="hoverButton"> 
            </MainButton>
            <MainButton children="Dubai" className="hoverButton"> 
            </MainButton>
            <MainButton children="Sweden" className="hoverButton"> 
            </MainButton>
            <MainButton children="Australia" className="hoverButton"> 
            </MainButton>
            <MainButton children="Turkey" className="hoverButton"> 
            </MainButton>
          </div>
          <div>
            <label style={{fontSize: 36, marginTop: 30}}>Most Visited Countries</label>
            <div style={{marginTop: 30, display: 'inline-flex'}}>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
              <div className='img-label'>
              <label>
                <img className='small-img' src="./img/assets/urn_aaid_sc_US_9cc34ef4-7397-4802-8181-853fa53f6e6f-_4_.png" />
                <p>Germany</p>
              </label>
              </div>
            </div>
          </div>
          <div>
            <label style={{fontSize: 36, marginTop: 30}}>Top Cities</label>
            <div style={{marginTop: 30, display: 'inline-flex'}}>
              <div className='img-label'>
                <IntroImg/>
              </div>
              <div className='img-label'>
                <IntroImg/>
              </div>
              <div className='img-label'>
                <IntroImg/>
              </div>
              <div className='img-label'>
                <IntroImg/>
              </div>
            </div>
          </div>
          <div>
            <label style={{fontSize: 36, marginTop: 30}}>Top Activities</label>
            <div style={{marginTop: 30, display: 'inline-flex'}}>
              <div className='img-label'>
                <IntroImg/>
              </div>
              <div className='img-label'>
                <IntroImg/>
              </div>
              <div className='img-label'>
                <IntroImg/>
              </div>
              <div className='img-label'>
                <IntroImg/>
              </div>
            </div>
          </div>
          <button className='ad-btn' onClick={handleClick}>Adspace</button>
        </div>
      </MainConrainer>
      
      <div style={{backgroundColor: 'rgb(2, 148, 233)', width: '100vw'}}>
        <RadiusDiv>
          <div style={{color: 'white', width: '100%', backgroundColor: 'rgb(2, 148, 233'}}>
              <label style={{marginTop: 250, fontSize: 70, fontWeight: 'bold'}}>
                Live with Crypto,<br></br> Travel with Crypto
              </label>
              <label style={{fontSize: 30, display: 'block'}}>
                Seamlessly integrate cryptocurrency into your lifestyle, from daily transactions to unforgettable journeys.
              </label>
            </div>
            <ImgDiv>
              <img src="./img/assets/123.png" style={{ width: '100%', height: '100%', borderRadius: 20 }} alt=""/>
            </ImgDiv>
          </RadiusDiv>
      </div>
      <CryptoList/>
    </div>
  )
}
export default Home
