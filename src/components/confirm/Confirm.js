import React from 'react'
import MainContainer from '../common/components/MainContainer'
import Tabconfirm from './components/TabConfirm'
import { useLocation } from 'react-router-dom';

const Confirm = () => {
    const location = useLocation();
    const hotelInfo = location.state.hotelInfo;
    const from = location.state.from;
    const to = location.state.to;
    const together = location.state.together;
    console.log("hotelInfomation",location)
    return(
        <div>
            <MainContainer>
                <Tabconfirm hotelInfo={hotelInfo} from={from} to={to} together={together}/>
            </MainContainer>
        </div>
    )
}

export default Confirm