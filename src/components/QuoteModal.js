import React from 'react'
import Modal from 'react-modal'

const QuoteModal = ({ quoteVisible }) => {
    return (
        <Modal
            overlayClassName="quote-modal-overlay"
            className="quote-modal-content"
            isOpen={quoteVisible}
            closeTimeoutMS={200}
        >
            <div>
                <p>"Mala la wea"</p>
                <span>-Weon</span>
            </div>
            <div>
                <p>intrucciones</p>
                <p>mareo</p>
            </div>
        </Modal>
    )
}

export default QuoteModal;
