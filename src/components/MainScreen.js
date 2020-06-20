import React from 'react'
import styled from 'styled-components'

import RoutinesCarousel from './RoutinesCarousel'

const MainContainer = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .main-title {
        font-family: 'Sacramento', cursive;
        font-size: 3.5rem;
        font-weight: normal;
    }
`


export default () => {
    return (
        <MainContainer>
            <h1 className="main-title">Ahimsa</h1>
            <RoutinesCarousel />
        </MainContainer>
    )
}

