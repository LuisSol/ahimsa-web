import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import { pageTransition } from '../common_styles';
import QuoteModal from './QuoteModal';
import { routineGradients, backBtnGradient } from '../common_styles';

const StartContainer = styled.section`
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
    .btn-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 120px;
    }
    .disabled {
        opacity: .4;
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
const Counter = styled.span`
    font-family: 'Sacramento', cursive;
    font-size: 6rem;
`
const PieChart =  styled.div`
    position: relative;
    height: 400px;
    width: 400px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .pointer-container {
        position: absolute;
        width: 20px;
        top: -25px;
    }
    .pointer {
        height: 20px;
        width: 20px;
        background-color: white;
        border: 1px solid #666;
        border-radius: 50%
    }
`
const BreathCircle = styled.div`
    height: 320px;
    width: 320px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    span {
        font-family: 'Sacramento', cursive;
        font-size: 3.5rem;
    }
`
const counterInit = 3;

const StartScreen = () => {
    const [quoteVisible, setQuoteVisible] = useState(true);
    const [countdownVisible, setCountdownVisible] = useState(false);
    const [routineRunning, setRoutineRunning] = useState(false);    
    const [counter, setCounter] = useState(counterInit);
    const { routineIndex, routine } = useSelector(state => state);
    const history = useHistory();

    // intro modal timer
    useEffect(() => {
        setTimeout(() => {
            setQuoteVisible(false);
        }, 4500);
    }, []);

    const restartRoutine = () => {
        setCountdownVisible(true);
        setRoutineRunning(true);
        setTimeout(() => {
            setCounter(counter - 1);
        }, 1000);
    }

    const startRoutine = () => {        
        setTimeout(() => {
            setCounter(counterInit);
        }, 300);
    };

    // Countdown
    useEffect(() => {        
        if(counter === 1) {
            setTimeout(() => {
                setCounter('Ya');
                setTimeout(() => {
                    setCountdownVisible(false);
                    startRoutine();
                }, 1000);
            }, 1000);
        }
        else if(counter !== counterInit && counter !== 'Ya') {
            setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);            
        }        
    },[counter]);

    return (
        <motion.main
            initial="out" animate="in" exit="out" variants={pageTransition} 
            style={{height: '100%'}}
        >
            <QuoteModal quoteVisible={quoteVisible} />
            <Modal 
                isOpen={countdownVisible}
                className="countdown-modal-content"
                overlayClassName="countdown-modal-overlay"
                closeTimeoutMS={200}
            >
                <Counter>{counter}</Counter>
            </Modal>
            {
                !quoteVisible &&
                <StartContainer>                
                    <h1 className="main-title">
                        {routine.title}
                    </h1>
                    <PieChart
                        style={routine.pieChart}
                    >   
                        <div className='pointer-container'>
                            <div className='pointer'></div>
                        </div>
                        <BreathCircle
                            style={routineGradients[routineIndex]}
                        >
                            <span>Inhala</span>    
                        </BreathCircle>
                    </PieChart>
                    <div className="btn-container">
                        <PrimaryBtn 
                            style={routineGradients[routineIndex]}
                            className={routineRunning ? 'disabled' : ''}
                            onClick={restartRoutine}
                            disabled={routineRunning}
                        >
                            Iniciar
                        </PrimaryBtn>
                        <PrimaryBtn 
                            style={backBtnGradient}
                            onClick={() => history.push('/')}
                        >
                            Regresar
                        </PrimaryBtn>
                    </div>
                </StartContainer>
            }
        </motion.main>
    )
}

export default StartScreen;