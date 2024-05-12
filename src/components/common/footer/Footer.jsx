import React from "react"
import IconBrand from '../../common/IconBrand';

const Footer = () => {
  return (
    <div className='footer-div'>
      <div style={{width: '60%'}}>
        <label style={{display: 'inline-flex', marginTop: 30}}>
        <IconBrand/>

          <p style={{marginTop: '10px'}}> Bookai.travel</p>
        </label>
      </div>
      <div style={{width: '40%', display: 'inline-flex', fontSize: '16px'}}>
        <label style={{width: '50%'}}>
          Home<br></br>
          Create an Itinerary<br></br>
          Book Flights<br></br>
          Book Hotels<br></br>
          Book Activities
        </label>

        <label style={{width: '50%'}}>
          Telegram<br></br>
          Twitter<br></br>
        </label>

      </div>
      
    </div>
  )
}

export default Footer
