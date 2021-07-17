import React from 'react';
import Modal from 'react-modal';

const GameModal = (props) => (
    <Modal 
        className="modal"
        isOpen={props.currentScore === 12} 
        contentLabel="Selected Option" 
        onRequestClose={props.handleModalClear}
        closeTimeoutMS={200}    
    >
        <h3 className="modal__title">You win!</h3>
        <button className="button" onClick={props.handleModalClear}>Okay</button>
    </Modal>
)

export default GameModal;