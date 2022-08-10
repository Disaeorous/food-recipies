import React from 'react';
import './formAuth.scss';

function FormLogin() {
	return (
		<form className='auth-form'>
			<div className="auth-form__field">
				<input className='auth-form__input' id="user-name" type="text" name='user-name' placeholder='Type your name' />
				<label className='auth-form__label' htmlFor="user-name">Type your name</label>
			</div>

			<div className="auth-form__field">
				<input className='auth-form__input' id="user-password" type="password" name='user-password' placeholder='Type your password' />
				<label className='auth-form__label' htmlFor="user-password">Type your password</label>
			</div>
		</form>
	)
}

export default FormLogin