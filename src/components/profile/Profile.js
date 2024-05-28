import React from 'react'
import MainContainer from '../common/components/MainContainer'
import SideTab from '../profile/components/SideTab'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    mainLabel: {
      color: 'white',
      fontSize: 60,
      textAlign: 'center',
      marginBottom: 50
    },
  });

const Intro = () => {
    const classes = useStyles();

    return(
        <div>
            <MainContainer>
                <div className={classes.mainLabel}>
                    <label><strong>Welcome, Elon!</strong></label>
                </div>
                <SideTab/>
            </MainContainer>
        </div>
    )
}

export default Intro