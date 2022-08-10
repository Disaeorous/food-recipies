import React, { useState } from 'react';
import Modal from '../Modal';
import FormLogin from '../Form/FormLogin';

function LogIn() {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		return setShowModal(prev => !prev);
	}

	return (
		<li className='auth-login'>
			<button onClick={showModalHandler} className='auth-link' type='button'>Log in</button>

			<Modal isOpen={showModal} closeModal={showModalHandler} title="Log in" >
				<FormLogin />
			</Modal>
		</li>
	)
}

export default LogIn