import React from 'react';
import './styles/modal.css';


const Modal = ({isOpen,closeModal,fetchCharacter}) => {

    const handleModalDialogueClick = e =>{
        e.stopPropagation()
    }
    console.log(fetchCharacter)
		return (
			<div className={`modal ${isOpen && 'open-modal'}`} onClick={closeModal}>
				<div className='modal-content' onClick={handleModalDialogueClick}>
					<h2>Hello Modal</h2>
					<p>
						{fetchCharacter.id}
					</p>
				</div>
        <button onClick={closeModal}>CloseModal</button>
			</div>
		);
};

export default Modal;
