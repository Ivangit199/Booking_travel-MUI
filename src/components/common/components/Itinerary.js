import React from 'react'
import { makeStyles } from '@mui/styles';
import ListNum from './ListNum';
import { useEffect, useRef, useState } from "react";
import { chatCompletion } from './../../common/api/chat.api'
import { toast } from "react-toastify";



const useStyles = makeStyles({
    itinerary: {
        backgroundSize: 'cover', // This rescales the background image to cover the entire container while maintaining aspect ratio
        backgroundPosition: 'center', // This centers the background image
        textAlign: 'center',
        border: '1px solid white',
        marginTop: '64px',
        color: 'white',
        paddingBottom: '30px',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    labelTo: {
        marginTop: '30px',
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
        width: '350px',
        paddingLeft: 20
    },
    experienceBrand: {
        width: '100%'
    },
    destinationImg: {
        display: 'grid',
        width: '25%',
        textAlign: "center",
    },
    destImg: {
        width: '95%',
        height: 'auto'
    },
    desLabel: {
        color: 'white',
        marginTop: 5,
        width: '40%',
        marginRight: 30,
        fontSize: 30,
        textAlign: 'left',
        marginLeft: 20,
        '@media (max-width: 768px)': {
          width: '90%'
        },
    },
    heartIcon: {
        width: '44px',
        height: '44px',
        position: 'absolute',
        top: 40,
        right: 30,
    },
    bookSymbol: {
        display: 'inline-flex',
        cursor: 'pointer',
        marginTop: 30,
      },
      tripBtn: {
        width: '270px',
        height: 110,
        backgroundColor: 'rgb(11, 60, 222)',
        color: 'white',
        borderRadius: 60,
        paddingLeft: 15,
        paddingTop: 20,
        fontSize: 20,
        marginTop: 20,
        cursor: 'pointer',
        '@media (max-width: 768px)': {
          width: '90%',
          fontSize: 20
        },
      },
      tripImg: {
        width: 72,
        height: 72,
        marginLeft: 70,
        cursor: 'pointer',
        '@media (max-width: 768px)': {
          marginLeft: 20
        },
      },
      bottomDiv: {
        display: 'inline-flex',
        width: '100%',
        '@media (max-width: 768px)': {
          display: 'grid',
        },
      }
});

const Itinerary = ({ getTravelPeriod, getPlan, getDestination }) => {
  const classes = useStyles();
  const [destination, setDestination] = useState("") 
  const [period, setPeriod] = useState("0")
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [onRequest, setOnRequest] = useState(false);
  

  const messageType = {
    answer: "answer",
    question: "question"
  };
  const onEnterPress = (e) => {
    if (e.keyCode === 13) getAnswer();
  };

  const getAnswer = async () => {
  // if (onRequest) return;
  if (period == "0") {
    alert("Please Select Period")
  }
  const query = "I want to travel to " + destination + " for " + period +  "days. what should i do every day. I wnat to get description about place and activity. place should be a famous place of " + destination + " and writed in 1 line and activity should be writed in 3 lines. place and activity are seperated by %,acticity must be one paragraph";
  
  const newMessages = [...messages, {
    type: messageType.question,
    content: query
  }];
  setMessages(newMessages);
  // setQuestion("");
  setOnRequest(true); 
  const { response, err } = await chatCompletion({ prompt: query });

  if (response) {
    setMessages([...newMessages, {
      type: messageType.answer,
      content: response.text
    }]);
    getPlan(response.text)
  }
  if (err) {
    toast.error(err.message);
    setOnRequest(false);
  }
};
const getPeriod = (result) => {
  setPeriod(result);
  
  getTravelPeriod(result);
  
}
const putDestination = (result) => {
  setDestination(result);
  getDestination(result);
}

  return (
    <div className={classes.itinerary}>
    
      <div>
            <label className={classes.labelTo}>I AM TRAVLLING TO</label>
        </div>
        <div>
            <input className={classes.InputTo} type='text' value={destination} onChange={(e) => putDestination(e.target.value)}/>
        </div>
        <div>
            <label className={classes.labelTo} style={{marginTop: '20px'}} onKeyUp={onEnterPress} >FOR <ListNum getPeriod={getPeriod}/> DAYS</label>
        </div>
        <label className={classes.tripBtn} onClick={getAnswer}>
                CREATE
                <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
            </label>
        <div>
        <label style={{fontSize: 24, marginTop: 30}}>SUGGESTIONS:DUBAI, MALAYSIA, SWEDEN, USA 
        </label>
        </div>
    </div>
  )

}

export default Itinerary
