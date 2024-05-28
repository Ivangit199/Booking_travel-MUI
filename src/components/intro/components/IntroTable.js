import React from 'react'
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    introTable: {
        marginTop: 20,
        color: 'white',
        width: '80%',
        marginBottom: 20,
        textAlign: 'center',
        marginRight: 20,
    },
    tableHead: {
        backgroundColor: 'rgb(231,231,231)',
        color: "black",
        fontSize: 20,
        fontWeight: 'normal',
        borderRadius: 30
    },
    tripBtn: {
        width: '100%',
        height: 80,
        backgroundColor: 'rgb(10, 59, 205)',
        color: 'white',
        borderRadius: 40,
        paddingLeft: 30,
        paddingTop: 10,
        fontSize: 20,
        marginTop: 23,
        '@media (max-width: 768px)': {
          width: '90%',
          fontSize: 20
        },
      },
      tripImg: {
        width: 60,
        height: 60,
        marginLeft: '10px',
        cursor: 'pointer',
        '@media (max-width: 768px)': {
            marginLeft: '45%'
          },
      },
});

const IntroTable = ({ content }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.introTable}>
        <table className="table intro-table table-bordered">
            <thead className={classes.tableHead}>
                <tr style={{width: '100%'}}>
                    <th style={{width: '15%', fontWeight: 'normal'}}>Room Choice</th>
                    <th style={{width: '15%', fontWeight: 'normal'}}>Sleeps</th>
                    <th style={{width: '15%', fontWeight: 'normal'}}>Rooms</th>
                    <th style={{width: '15%', fontWeight: 'normal'}}>Your Choices</th>
                    <th style={{width: '15%', fontWeight: 'normal'}}>Refundability</th>
                    <th style={{width: '25%', fontWeight: 'normal'}}>Price</th>
                </tr>
            </thead>
            <tbody style={{textAlign: 'left', fontSize: 20}}>
                <tr>
                    <td>
                        <div>
                            <img src="./img/header/Group 101.png" style={{marginTop: 20}}/>
                            <label style={{marginTop: 10, marginLeft: 10}}>Breakfast Included</label>
                            <label style={{marginTop: 100}}>
                                <img src="./img/header/Group 103.png" style={{marginRight: '5px'}}/>
                                King-Size Bed
                            </label>
                            <label>
                                <img src="./img/header/Group 103.png" style={{marginRight: '5px'}}/>
                                Non-Smoking
                            </label>

                        </div>
                        
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td style={{padding: 20}}>
                        <label>Your price <br></br>includes</label>
                        <label style={{fontSize: 20, width: '100%', paddingBottom: 50}}>
                            <strong>
                                Approx. US$14.29 in AVA giveback with Free Smart membership
                            </strong>
                        </label>
                        <div style={{borderBottom: '1px solid white', marginLeft: '-20px', width: 'calc(100% + 40px)'}}>

                        </div>
                        <label style={{marginTop: 10}}>
                            Payment<br></br>Options
                        </label>
                        <label>
                            <img src="./img/header/Group 103.png" style={{marginRight: '5px'}}/>
                            Card
                        </label>
                        <label>
                            <img src="./img/header/Group 103.png" style={{marginRight: '5px'}}/>
                            Crypto
                        </label>
                    </td>
                    <td>
                        <label style={{marginTop: 20}}>
                            Cancellation Policy<br></br>View all policy Options
                        </label>
                        <label style={{marginTop: 10}}>
                            Non-refundable
                        </label>
                    </td>
                    <td style={{fontSize: 24, textAlign: 'center', padding: 30}}>
                        <label style={{marginTop: 200}}>
                            From US$71.86
                        </label>
                        <label style={{color: 'rgb(2, 148, 233)'}}>
                            US$215.58 for 3 nights, 1 room
                        </label>
                        <label className={classes.tripBtn}  onClick={() => history.push('/confirm')}>
                            <span >BOOK NOW</span>
                            <img className={classes.tripImg} src="./img/header/airplane-round.png" alt=""/>
                        </label>
                    </td>
                </tr>
            </tbody>
            
        </table>    
    </div>
  )
}
export default IntroTable
