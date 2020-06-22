import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useSelector } from 'react-redux'

const ModalContent = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
`
const QuoteContainer = styled.div`
    max-width: 500px;
    p {
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
    }
    div {
        text-align: right;
    } 
`
const InstructionsContainer = styled.div`
    max-width: 500px;
    margin-top: 2rem;
`


const QuoteModal = ({ quoteVisible }) => {
    const {quote, author} = useSelector(state => state.quote)

    return (
        <Modal
            overlayClassName="quote-modal-overlay"
            className="quote-modal-content"
            isOpen={quoteVisible}
            closeTimeoutMS={200}
        >
            <ModalContent>
                <QuoteContainer>
                    <p>“{quote}”</p>
                    <div>-{author}.</div>
                </QuoteContainer>
                <InstructionsContainer>
                    <p>Recuerda inhalar y exhalar SOLO por la nariz, 
                       las inhalaciones deben ser profundas y al exhalar debes vaciar 
                       por completo tus pulmones. 
                    </p>
                    <p>Si presentas mareo es normal. Solo lleva tu barbilla al pecho y descanza unos minuto hasta que pase.</p>
                </InstructionsContainer>
            </ModalContent>
        </Modal>
    )
}

export default QuoteModal;
