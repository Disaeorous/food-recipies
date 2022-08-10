import React, { useState } from 'react';
import Modal from '../Modal';

function SignUp() {
	const [showModal, setShowModal] = useState(false);

	const showModalHandler = () => {
		return setShowModal(prev => !prev);
	}

	return (
		<li className='auth-signUp'>
			<button onClick={showModalHandler} className='auth-link' type='button'>sign up</button>
		
			<Modal isOpen={showModal} closeModal={showModalHandler} >
				<p>Hello. i'm a modal from Sign Up!</p>
			</Modal>
		</li>
	)
}

export default SignUp