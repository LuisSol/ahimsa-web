import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import RoutinesCarousel from './RoutinesCarousel';
import { routineGradients } from '../common_styles';

const MainContainer = styled.main` 
    height: 93%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .main-title {
        font-family: 'Sacramento', cursive;
        font-size: 3.5rem;
        font-weight: normal;
        margin: 0;
    }
    p {
        margin: 0;
    }
    .header {
        text-align: center;
    }
`

const PrimaryBtn = styled.button`
    border: 0;
    width: 10rem;
    height: 3.5rem;
    border-radius: 10px;
    color: white;
    font-size: 1.5rem;
`


export default () => {
    const current = useSelector(state => state.routineIndex)

    return (
        <MainContainer>
            <div className="header">
                <h1 className="main-title">Ahimsa</h1>
                <p>Elige tu ritmo:</p>                
            </div>            
            <RoutinesCarousel />
            <div>        
                <PrimaryBtn style={routineGradients[current]}>Elegir</PrimaryBtn>
            </div>
        </MainContainer>       
    )
}

