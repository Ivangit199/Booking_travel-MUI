import React from 'react'
import MainContainer from '../common/components/MainContainer'
import IntroTop from './components/IntroTop'
import IntroDestinate from './components/IntroDestinate'
import IntroList from './components/IntroList'
import IntroRoom from './components/IntroRoom'
import { useLocation } from 'react-router-dom';

const Intro = () => {
    const location = useLocation();
    const hotelInfo = location.state.hotelInfo;
    const from = location.state.from;
    const to = location.state.to;
    const together = location.state.together;
    const index = location.state.index;
    return(
        <div>
            <MainContainer>
                <IntroTop hotelInfo={hotelInfo} from={from} to={to} together={together}/>
                <IntroDestinate hotelInfo={hotelInfo} from={from} to={to} together={together}/>
                <IntroRoom  hotelInfo={hotelInfo} from={from} to={to} together={together}/>
            </MainContainer>
        </div>
    )
}

export default Intro