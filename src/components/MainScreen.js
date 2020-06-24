import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import RoutinesCarousel from './RoutinesCarousel';
import { routineGradients, pageTransition } from '../common_styles';

const MainContainer = styled.section`    
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .main-title {
        font-size: 2.5rem;
        font-weight: normal;
        margin: 0;
    }    
    .header {
        text-align: center;
    }
    @media (max-height: 420px) {
        .main-title {
            font-size: 1.4rem;
        }
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
    @media (max-height: 650px) {
        height: 1.9rem;
        font-size: .8rem;
        width: 6.5rem;
    }
    @media (max-height: 350px) {
        height: 1.6rem;
        font-size: .6rem;
        width: 4.5rem;
    }  
`

export default () => {
    const current = useSelector(state => state.routineIndex);
    const history = useHistory();    

    return (
        <motion.main
            initial="out" animate="in" exit="out" variants={pageTransition}            
            style={{height: '100%'}}
        >
            <MainContainer>            
                
                <h1 className="main-title">Elije tu ritmo:</h1>                                  
                           
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

