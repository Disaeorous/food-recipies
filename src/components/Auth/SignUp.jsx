import React, { useState } from 'react';
import Modal from '../Modal';
import FormSignUp from '../Form/FormSignUp';

function SignUp() {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		return setShowModal(prev => !prev);
	}

	return (
		<li className='auth-signUp'>
			<button onClick={showModalHandler} className='auth-link' type='button'>sign up</button>
		
			<Modal isOpen={showModal} closeModal={showModalHandler} title="Sign up" >
				<FormSignUp />
			</Modal>
		</li>
	)
}

export default SignUp