import React from 'react'
import { makeStyles } from '@mui/styles';
import BestGuarant from './BestGuarant';
import IntroBook from './IntroBook';
import { useEffect, useRef, useState } from "react";
import { chatCompletion } from './../../common/api/chat.api'
import { toast } from "react-toastify";

const useStyles = makeStyles({
    bookingAct: {
        backgroundColor: 'black',
        paddingTop: '50px',
        paddingLeft: '150px',
        marginTop: 65,
        paddingBottom: 30,
        border: '1px solid white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        textAlign: 'center',
        '@media (max-width: 768px)': {
            paddingLeft: '40px', // Hide the element on screens with a maximum width of 768px
          },
    },
    labelTo: {
        marginTop: '50px',
        color: 'white',
        fontSize: '24px',
        display: 'inline-flex'
    },
    InputTo: {
        marginTop: '20px',
        color: 'black',
        fontSize: '24px',
        backgroundColor: 'white',
        borderStyle: 'none',
        height: '50px',
        borderRadius: '10px',
        width: '350px'
    },
    tripBtn: {
        width: '270px',
        height: 90,
        backgroundColor: 'rgb(11, 60, 222)',
        color: 'white',
        borderRadius: 50,
        paddingLeft: 30,
        paddingTop: 10,
        fontSize: 20,
        marginTop: 20,
        cursor: 'pointer',
        '@media (max-width: 768px)': {
          fontSize: 20,
          width: '90%'
        },
    },
    tripImg: {
    width: 72,
    height: 72,
    marginLeft: '30%',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
        marginLeft: '65%',
      },
      '@media (max-width: 600px)': {
        marginLeft: '60%',
      },
    },
});

const BookingAct = ({ children }) => {
  const classes = useStyles();
  const [description, setdescription] = useState("") ;
  const [from, setFrom] = useState(""); 
  const [to, setTo] = useState(""); 
  const [together, setTogether] = useState("");
  const [messages, setMessages] = useState([]);
  const [onRequest, setOnRequest] = useState(false);
  const [price, setPrice] = useState([]);
  const [breakfast, setBreakfast] = useState("");
  const [cancelation, setCancellation] = useState("");
  const [starRating, setStarRating] = useState("");
  const [guestRating, setGuestRating] = useState("");
  const [memberPrice, setMemberPrice] = useState("");
  const [text, setText] = useState("");
//   const fetch = require('node-fetch');

  
  
  const getAnswer = async () => {
    // const payload = {
    //     query: {
    //       match: {
    //         field: 'value'
    //       }
    //     }
    //   };

    //   // Define request options
    // const requestOptions = {
    //     method: 'POST',
    //     headers: {
    //     'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(payload)
    // };

    // // Send the request
    // fetch(url, requestOptions)
    // .then(response => {
    // // Check if the request was successful (status code 200)
    // if (response.ok) {
    //     return response.json(); // Parse the JSON response
    // } else {
    //     throw new Error('Request failed with status: ' + response.status);
    // }
    // })
    // .then(data => {
    // // Handle the response data
    // console.log(data);
    // })
    // .catch(error => {
    // // Handle errors
    // console.error('Error:', error);
    // });
    // const client = new Client({
    //     cloud: {
    //       id: 'a8e587e7d62648ba91630e58149aa396:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvOjQ0MyRhMWM2ZjAyMjQzM2Q0ZDk3YTQwMWQ2OTNhYmNlNWRmNSRiYWZmMDdmYzhiOTk0ZDM0OTVlZjUxZGE1ZTIwYjBlYg=='
    //     },
    //     auth: {
    //       apiKey: 'RGlpSnpZOEIwYWd4Q0hoeGpqYmI6elItOUUwX3hUeHFQNEk2V3ROVFFtUQ=='
    //     }
    // });
    // async function fetchData() {
    //     try {
    //       const result = await client.search({
    //         index: 'booking',
    //         body: {
    //           query: {
    //             match_all: {}
    //           }
    //         }
    //       });
    //       console.log(result.body.hits.hits);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   }
    //   fetchData();
   
    if (description == "" || from == "" || to == "" || together == "" ) {
        alert("Please fill all description");
        return;
    }
    const requirement = "Additional requirement for hotels: total price for 3 nights and one room is higher than %" + price[0] + " and lower than %" + price[1] + ", " + breakfast + ", " + cancelation + ", " + starRating + ', ' + guestRating + ', ' + memberPrice;
    const query = "I want to travel at " + from + " to " + to +  " and we are " + together + ". We want " + description + " and at least 3 internation airport and hotel names,addresses and how far from " + from +  ". Give me them with this style:Sama hotel%KLInternational Airport%Jalan Cta 4b%100km. dont label it with number";
    const messageType = {
        answer: "answer",
        question: "question"
      };
    const newMessages = [...messages, {
        type: messageType.question,
        content: query
      }];
    setMessages(newMessages);
    setOnRequest(true); 
    const { response, err } = await chatCompletion({ prompt: query });
  if (response) {
    setMessages([...newMessages, {
      type: messageType.answer,
      content: response.text
    }]);
    analyzeData (response.text);
  }
  if (err) {
    toast.error(err.message);
    setOnRequest(false);
  }
};

const analyzeData = (text) => {
    setText(text);
}
const getPrice = (result) =>  {
    setPrice(result);
}
const getBreakfast = (result) =>  {
    setPrice(result);
}
const getCancellation = (result) =>  {
    setCancellation(result);
}
const getStarRating = (result) =>  {
    setStarRating(result);
}
const getGuestRating = (result) =>  {
    setGuestRating(result);
}
const getMemberPrice = (result) =>  {
    setMemberPrice(result);
}
  return (
    <div>
        <div className={classes.bookingAct}>
        {children}
        <div>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{border: 'none', display: 'flex', justifyContent: 'center'}}>
                <li class="nav-item" role="presentation">
                    <button class="nav-link active book-tab-btn" id="pills-stays-tab" data-bs-toggle="pill" data-bs-target="#pills-stays" type="button" role="tab" aria-controls="pills-stays" aria-selected="true">STAYS</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link book-tab-btn" id="pills-flights-tab" data-bs-toggle="pill" data-bs-target="#pills-flights" type="button" role="tab" aria-controls="pills-flights" aria-selected="false">FLIGHTS</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link book-tab-btn" id="pills-activities-tab" data-bs-toggle="pill" data-bs-target="#pills-activities" type="button" role="tab" aria-controls="pills-activities" aria-selected="false">ACTIVITIES</button>
                </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-stays" role="tabpanel" aria-labelledby="pills-stays-tab">
                        <div>
                            <div>
                                <input type='text' className='search-input search-activity' value={description} onChange={(e) => setdescription(e.target.value)} required/>
                            </div>
                            <div>
                                <input type='text' className='search-input' style={{width: '15%'}} placeholder='From' value={from} onChange={(e) => setFrom(e.target.value)}/>
                                <input type='text' className='search-input'  style={{width: '15%'}} placeholder='To' value={to} onChange={(e) => setTo(e.target.value)}/>
                                <input type='text' className='search-input search-media'  style={{width: '20%'}} placeholder='2 Adults 1 Child' value={together}onChange={(e) => setTogether(e.target.value)}/>
                            </div>
                        </div>
                        <label className={classes.tripBtn} onClick={getAnswer}>
                                SEARCH
                                <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
                        </label>
                        <div>
                            <label className='suggest-label' style={{fontSize: 24, marginTop: 30, color: 'white'}}>
                                SUGGESTIONS: DUBAI, MALAYSIA, SWEDEN. USA 
                            </label>
                        </div>
                    </div>
                <div class="tab-pane fade" id="pills-flights" role="tabpanel" aria-labelledby="pills-flights-tab">
                <div>
                    <div>
                        <input type='text' className='search-input search-activity'/>
                    </div>
                    <div>
                        <input type='text' className='search-input' style={{width: '15%'}} placeholder='From'/>
                        <input type='text' className='search-input'  style={{width: '15%'}} placeholder='To'/>
                        <input type='text' className='search-input search-media'  style={{width: '20%',  }} placeholder='2 Adults 1 Child'/>
                    </div>
                    </div>
                    <label className={classes.tripBtn}>
                            SEARCH
                            <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
                    </label>
                    <div>
                        <label className='suggest-label' style={{fontSize: 24, marginTop: 30, color: 'white'}}>
                            SUGGESTIONS: DUBAI, MALAYSIA, SWEDEN. USA 
                        </label>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-activities" role="tabpanel" aria-labelledby="pills-activities-tab">
                <div>
                    <div>
                        <input type='text' className='search-input search-activity'/>
                    </div>
                    <div>
                        <input type='text' className='search-input' style={{width: '15%'}} placeholder='From'/>
                        <input type='text' className='search-input'  style={{width: '15%'}} placeholder='To'/>
                        <input type='text' className='search-input search-media'  style={{width: '20%',  }} placeholder='2 Adults 1 Child'/>
                    </div>
                    </div>
                    <label className={classes.tripBtn}>
                            SEARCH
                            <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
                    </label>
                    <div>
                        <label className='suggest-label' style={{fontSize: 24, marginTop: 30, color: 'white'}}>
                            SUGGESTIONS: DUBAI, MALAYSIA, SWEDEN. USA 
                        </label>
                    </div>
                </div>
                </div>
            </div>       
        </div>
        <div className='booking-total-media'>
        <BestGuarant getPrice={getPrice} getBreakfast={getBreakfast} getCancellation={getCancellation} getStarRating={getStarRating} getGuestRating={getGuestRating} getMemberPrice={getMemberPrice}>
        </BestGuarant>
        <IntroBook children={text} from={from} to={to} together={together}/>
        </div>
    </div>
  )

}

export default BookingAct
