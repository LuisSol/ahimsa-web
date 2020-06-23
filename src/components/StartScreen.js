import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';

import QuoteModal from './QuoteModal';
import { pageTransition } from '../common_styles';
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
        font-size: 2.8rem;
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
    @media (max-height: 800px) {
        .btn-container {
            height: 100px;
        }
        .main-title {
            font-size: 2.6rem;
        }
    }
    @media (max-width: 350px) {        
        .main-title {
            font-size: 2.3rem;
        }
    }
    @media (max-height: 420px) {
        .main-title {
            font-size: 1.8rem;
        }
        .btn-container {
            height: 55px;
        }
    } 
    @media (max-height: 380px) {
        .main-title {
            font-size: 1.3rem;
        }
        .btn-container {
            height: 55px;
        }
    }    
`
const PrimaryBtn = styled.button`
    border: 0;
    width: 7rem;
    height: 3rem;
    border-radius: 10px;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;    
    &:focus {
        outline: none;
    }
    &:active {
        opacity: .4;
    }
    @media (max-height: 800px) {
        height: 2.3rem;
        width: 6rem;
        font-size: 1rem;
    }
    @media (max-height: 380px), (max-height: 420px) {
        height: 1.5rem;
        width: 4.5rem;
        font-size: .6rem;
    }    
`
const Counter = styled.span`
    font-family: 'Sacramento', cursive;
    font-size: 6rem;
`
const PieChart =  styled.div`
    position: relative;
    height: 380px;
    width: 380px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .pointer-container {
        position: absolute;
        width: 20px;
        height: 430px;
    }
    .pointer {
        height: 20px;
        width: 20px;
        background-color: white;
        border: 1px solid #666;
        border-radius: 50%
    }
    .breath-circle {
        height: 300px;
        width: 300px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        span {
            font-family: 'Sacramento', cursive;
            font-size: 3.4rem;
            position: absolute;
        }
    }    
    @media (max-height: 800px), (max-width: 420px) {
        height: 330px;
        width: 330px;
        .pointer-container {
            height: 380px;
        }
        .breath-circle {
            height: 250px;
            width: 250px;
            span {
                font-size: 2.8rem;
            }
        }
    }
    @media (max-width: 380px) {
        height: 280px;
        width: 280px;
        .pointer-container {
            height: 330px;
        }
        .pointer {
            height: 17px;
            width: 17px;
        }
        .breath-circle {
            height: 220px;
            width: 220px;
            span {
                font-size: 2.5rem;
            }
        }
    }
    @media (max-width: 350px) {
        height: 250px;
        width: 250px;
        .pointer-container {
            height: 300px;
        }
        .pointer {
            height: 15px;
            width: 15px;
        }
        .breath-circle {
            height: 200px;
            width: 200px;
            span {
                font-size: 2.3rem;
            }
        }
    }
    @media (max-height: 420px) {
        height: 190px;
        width: 190px;
        .pointer-container {
            height: 220px;
            width: 10px;
        }
        .pointer {
            height: 10px;
            width: 10px;
        }
        .breath-circle {
            height: 150px;
            width: 150px;
            span {
                font-size: 1.8rem;
            }
        }
    }
    @media (max-height: 380px) {
        height: 160px;
        width: 160px;
        .pointer-container {
            height: 190px;
            width: 10px;
        }
        .pointer {
            height: 10px;
            width: 10px;
        }
        .breath-circle {
            height: 120px;
            width: 120px;
            span {
                font-size: 1.8rem;
            }
        }
    }
    @media (max-height: 320px) {
        height: 130px;
        width: 130px;
        .pointer-container {
            height: 160px;
            width: 10px;
        }
        .pointer {
            height: 10px;
            width: 10px;
        }
        .breath-circle {
            height: 90px;
            width: 90px;
            span {
                font-size: 1.5rem;
            }
        }
    }
`

/* total animation time */
let totalRoutineTime;
/* Countdown init value */
const counterInit = 3;

const StartScreen = () => {
    const { routineIndex, routine } = useSelector(state => state);
    const [quoteVisible, setQuoteVisible] = useState(true);
    const [countdownVisible, setCountdownVisible] = useState(false);
    const [routineRunning, setRoutineRunning] = useState(false);    
    const [counter, setCounter] = useState(counterInit);    
    const history = useHistory();
    const pointerAnimation = useAnimation();
    const breathAnimation = useAnimation();
    const msg1Animation = useAnimation();
    const msg2Animation = useAnimation();
    const msg3Animation = useAnimation();

    // intro modal timer
    useEffect(() => {       
            totalRoutineTime = routine.inhaleTime + routine.holdTime
                            + routine.exhaleTime;
            setTimeout(() => {
                setQuoteVisible(false);
            }, 5000);        
    }, [routine.inhaleTime, routine.holdTime, routine.exhaleTime]);

    const restartRoutine = () => {
        setCountdownVisible(true);
        setRoutineRunning(true);
        setTimeout(() => {
            setCounter(counter - 1);
        }, 1000);
    } 
    
    const startAnimations =  useCallback(() => {
        pointerAnimation.start({
            rotate: 360,
            transition: {
                duration: totalRoutineTime,
                loop: routine.iterations,
                ease: 'linear'
            }
        });
        breathAnimation.start({
            scale: [null, 1.1, 1.1, 1],
            transition: {
                duration: totalRoutineTime,
                loop: routine.iterations,
                times: [0, 0.4, 0.6, 1],
                ease: 'linear'
            }
        });
        msg1Animation.start({
            opacity: [null, 1, 0, 0, 1],
            transition: {
                duration: totalRoutineTime,
                loop: routine.iterations,
                times: [0, 0.35, 0.4, 0.95, 1],
                ease: 'linear'
            }
        });
        msg2Animation.start({
            opacity: [null, 0, 1, 1, 0],
            transition: {
                duration: totalRoutineTime,
                loop: routine.iterations,
                times: [0, 0.35, 0.4, 0.55, 0.6],
                ease: 'linear'
            }
        });
        msg3Animation.start({
            opacity: [null, 0, 1, 1, 0],
            transition: {
                duration: totalRoutineTime,
                loop: routine.iterations,
                times: [0, 0.55, 0.6, 0.95, 1],
                ease: 'linear'
            }
        });
    },[pointerAnimation, breathAnimation, routine.iterations, 
       msg1Animation, msg2Animation, msg3Animation ]);

    const startRoutine = useCallback(() => {        
        setTimeout(() => {
            setCounter(counterInit);
            startAnimations();
        }, 300);
    }, [startAnimations]);   

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
    },[counter, startRoutine]);

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
                        <motion.div                         
                            className='pointer-container'
                            animate={pointerAnimation}
                            onAnimationComplete={() => pointerAnimation.set({ rotate: 0})}
                        >
                            <div className='pointer'></div>
                        </motion.div>
                        <motion.div
                            className='breath-circle'
                            animate={breathAnimation}
                            style={routineGradients[routineIndex]}
                            onAnimationComplete={() => setRoutineRunning(false)}
                        >
                            <motion.span
                                animate={msg1Animation}
                            >
                                Inhala
                            </motion.span> 
                            <motion.span
                                initial={{opacity: 0}}
                                animate={msg2Animation}
                            >
                                Sostén
                            </motion.span> 
                            <motion.span
                                initial={{opacity: 0}}
                                animate={msg3Animation}
                            >
                                Exhala
                            </motion.span>     
                        </motion.div>
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