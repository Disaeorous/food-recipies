import React, { useState } from 'react';
import Modal from '../Modal';

function LogIn() {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		return setShowModal(prev => !prev);
	}

	return (
		<li className='auth-login'>
			<button onClick={showModalHandler} className='auth-link' type='button'>Log in</button>

			<Modal isOpen={showModal} closeModal={showModalHandler} >
				<p>Hello. i'm a modal from Login!</p>
			</Modal>
		</li>
	)
}

export default LogIn