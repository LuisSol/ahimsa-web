import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import RoutinesCarousel from './RoutinesCarousel';
import { routineGradients, pageTransition } from '../common_styles';
import { changeQuote } from '../redux/routineActions'

const MainContainer = styled.section`    
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
    cursor: pointer;
    &:focus {
        outline: none;
    }
    &:active {
        opacity: .4;
    }
`

export default () => {
    const current = useSelector(state => state.routineIndex);
    const history = useHistory();
    const dispatch = useDispatch();

    useState(() => {        
        dispatch(changeQuote());
    }, [])

    return (
        <motion.main
            initial="out" animate="in" exit="out" variants={pageTransition}            
            style={{height: '100%'}}
        >
            <MainContainer>            
                <div className="header">
                    <h1 className="main-title">Ahimsa</h1>
                    <p>Elige tu ritmo:</p>                
                </div>            
                <RoutinesCarousel />
                <div>        
                    <PrimaryBtn 
                        style={routineGradients[current]}
                        onClick={() => history.push('/start')}
                    >
                        Elegir
                    </PrimaryBtn>
                </div>            
            </MainContainer>
        </motion.main>       
    )
}

