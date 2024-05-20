import React from 'react'
import MainContainer from '../common/components/MainContainer'
import IntroTop from './IntroTop'
import IntroDestinate from './IntroDestinate'

const Intro = () => {
    return(
        <div>
            <MainContainer>
                <IntroTop/>
                <IntroDestinate/>
               
            </MainContainer>
        </div>
    )
}

export default Intro