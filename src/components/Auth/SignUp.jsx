import React, { useState } from 'react';
import Modal from '../Modal';
import FormSignUp from '../Form/FormSignUp';
import FormSuccess from '../Form/FormSuccess';

function SignUp() {
	const [showModal, setShowModal] = useState(false);
	const [formSubmited, setFormSubmited] = useState(false);

	const showModalHandler = () => {
		return setShowModal(prev => !prev);
	};

	const formSubmitHandler = () => {
		return setFormSubmited(prev => (prev = true));
	};

	return (
		<li className='auth-signUp'>
			<button onClick={showModalHandler} className='auth-link' type='button'>
				sign up
			</button>

			<Modal isOpen={showModal} closeModal={showModalHandler} title='Sign up'>
				{formSubmited ? (
					<FormSuccess title='Authorization is success!' />
				) : (
					<FormSignUp isSubmited={formSubmitHandler} />
				)}
			</Modal>
		</li>
	);
}

export default SignUp;
