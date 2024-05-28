import React from 'react'
import { makeStyles } from '@mui/styles';
import RoomImg from './roomImg';
import IntroTable from './IntroTable';

const useStyles = makeStyles({
  roomDetail: {
    border: '1px solid white',
    borderRadius: 20,
  },
  roomHeader: {
    height: 100,
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'rgb(0, 113, 255)',
    color: 'white',
    paddingTop: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  roomContent: {
    display: 'inline-flex',
    width: '100%'
  },
  introGrid: {
    display: 'grid'
  }

});

const RoomDetail = ({ content }) => {
  const classes = useStyles();

  return (
    <div className={classes.roomDetail}>
        <label className={classes.roomHeader}>
            Premier Double Room (Twin Beds)
        </label>
        <div className={classes.roomContent}>
            <RoomImg/>
            <div className={classes.introGrid}>
                <IntroTable/>
                <IntroTable/>
            </div>
            
        </div>
    </div>
  )
}
export default RoomDetail
