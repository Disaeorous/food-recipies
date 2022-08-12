import React, { useState } from 'react';
import Modal from '../Modal';
import FormLogin from '../Form/FormLogin';
import FormSuccess from '../Form/FormSuccess';

function LogIn() {
	const [showModal, setShowModal] = useState(false);
	const [formSubmited, setFormSubmited] = useState(false);

	const showModalHandler = () => {
		return setShowModal(prev => !prev);
	};

	const formSubmitHandler = () => {
		return setFormSubmited(prev => (prev = true));
	};

	return (
		<li className='auth-login'>
			<button onClick={showModalHandler} className='auth-link' type='button'>
				Log in
			</button>

			<Modal isOpen={showModal} closeModal={showModalHandler} title='Log in'>
				{formSubmited ? (
					<FormSuccess title='You are logged in your account!' />
				) : (
					<FormLogin isSubmited={formSubmitHandler} />
				)}
			</Modal>
		</li>
	);
}

export default LogIn;
