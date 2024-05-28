import React from 'react'
import MainContainer from '../common/components/MainContainer'
import IntroTop from './components/IntroTop'
import IntroDestinate from './components/IntroDestinate'
import IntroList from './components/IntroList'
import IntroRoom from './components/IntroRoom'

const Intro = () => {
    return(
        <div>
            <MainContainer>
                <IntroTop/>
                <IntroDestinate/>
                <IntroRoom/>
            </MainContainer>
        </div>
    )
}

export default Intro