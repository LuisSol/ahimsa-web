import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

import { pageTransition } from '../common_styles';
import QuoteModal from './QuoteModal';

const StartContainer = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const StartScreen = () => {
    const [quoteVisible, setQuoteVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setQuoteVisible(false);
        }, 5000);
    }, [])

    return (
        <motion.main
            initial="out" animate="in" exit="out" variants={pageTransition} 
            style={{height: '100%'}}
        >
            <QuoteModal quoteVisible={quoteVisible} />
            {
                !quoteVisible &&
                <StartContainer>                
                    <h1>
                        HOLA QUE TALLLLL!!!!!!!
                    </h1>
                </StartContainer>
            }
        </motion.main>
    )
}

export default StartScreen;