import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  introList: {
    padding: 20,
  },
  introImg: {
    width: '24%',
    height: 'auto',
    marginRight: '1%',
    marginBottom: '20px',
    borderRadius: 20
    },
    supportPart: {
        display: 'inline-flex',
        width: '100%',
    },
    supportList: {
        width: '49%',
        borderRadius: '20px',
        padding: 30,
        backgroundColor: 'white',
        marginRight: '1%'
    },
    supportDiv: {
        color: 'white',
        fontSize: 20,
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '15%',
        color: 'black'
    },
    mapImg: {
        width: '100%',
        height: 'fix-content'
    }
    
});

const IntroList = ({ content }) => {
  const classes = useStyles();

  return (
    
        <div className={classes.introList}>
            <div>
                <img class={classes.introImg} src="./img/header/2npa94yu.png" alt="First slide"/>
                <img class={classes.introImg} src="./img/header/2npa94yu.png" alt="First slide"/>
                <img class={classes.introImg} src="./img/header/2npa94yu.png" alt="First slide"/>
                <img class={classes.introImg} src="./img/header/2npa94yu.png" alt="First slide"/>
                <img class={classes.introImg} src="./img/header/2npa94yu.png" alt="First slide"/>
                <img class={classes.introImg} src="./img/header/2npa94yu.png" alt="First slide"/>
                <img class={classes.introImg} src="./img/header/2npa94yu.png" alt="First slide"/>
                <img class={classes.introImg} src="./img/header/2npa94yu.png" alt="First slide"/>
            </div>
            <div className={classes.supportPart}>
                <div className={classes.supportList}>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/wifi-black.png"/>
                        <label>Free Wifi</label>
                    </div>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/parking-black.png"/>
                        <label>Parking</label>
                    </div>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/plane-inflight-black.png"/>
                        <label>Airport <br></br> Transfers</label>
                    </div>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/Group 99-black.png"/>
                        <label>Dinning <br></br> Services</label>
                    </div>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/Group 93-black.png"/>
                        <label>Concierge</label>
                    </div>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/Group 97-black.png"/>
                        <label>Luundry</label>
                    </div>
                    <div className={classes.supportDiv} style={{marginRight: '20%'}}>
                        <img src="./img/header/sparkles-black.png"/>
                        <label>Spa</label>
                    </div>
                    <div className={classes.supportDiv}>
                        <img src="./img/header/Group 95-black.png"/>
                        <label>Gym</label>
                    </div>
                </div>
                <div className={classes.supportList} style={{padding: 0}}>
                    <img class={classes.mapImg} src="./img/header/potihcf1.png" alt="First slide"/>
                </div>
            </div>
        </div>
  )
}
export default IntroList
