import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

function Modal({ isOpen, children, closeModal, title }) {
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<>
			<div onClick={isOpen && closeModal} className='overlay'></div>

			<div className='modal'>
				<header className='modal-header'>
					{title && <h1 className='modal-title'>{title}</h1>}
					<button
						onClick={isOpen && closeModal}
						className='modal-close'
						type='button'
					/>
				</header>

				<div className='modal-wrapper'>{children}</div>
			</div>
		</>,
		document.getElementById('portal')
	);
}

export default Modal;
