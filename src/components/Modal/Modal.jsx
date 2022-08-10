import React from 'react';
import './modal.scss';

function Modal( {isOpen, children, closeModal} ) {
	if (!isOpen) return null;

	return (
		<div className='modal'>
			{children}
			<button onClick={isOpen && closeModal} className='modal-close' type='button'>Close</button>
		</div>
	)
}

export default Modal