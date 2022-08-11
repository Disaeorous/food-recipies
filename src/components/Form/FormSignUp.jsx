import React, { useRef } from 'react';
import './formAuth.scss';

import useForm from '../../hooks/useForm';
import fieldValidation from './fieldValidation';

function FormSignUp( {isSubmited} ) {
	const { values, handleChange, handleSubmit, errors } = useForm(isSubmited, fieldValidation);

	return (
		<>
			<form onSubmit={handleSubmit} className='auth-form'>
				<div className="auth-form__field">
					{errors.user?.email && <span className='auth-form__error'>{errors.user?.email}</span> }
					<input value={values.user?.email} onChange={handleChange} className='auth-form__input' id='user-email' type="email" name='email' placeholder='Type your email' />
					<label className='auth-form__label' htmlFor="user-email">Email</label>
				</div>

				<div className="auth-form__field">
					{errors.test && <span className='auth-form__error'>{errors.test}</span> }
					<input value={values.test} onChange={handleChange} className='auth-form__input' id='user-test' type="text" name='test' placeholder='Type your test' />
					<label className='auth-form__label' htmlFor="user-test">Test</label>
				</div>

				<div className="auth-form__field">
					{errors.user?.name && <span className='auth-form__error'>{errors.user?.name}</span> }
					<input value={values.user?.name} onChange={handleChange} className='auth-form__input' id='user-name' type="text" name='name' placeholder='Type your name' />
					<label className='auth-form__label' htmlFor="user-name">Name</label>
				</div>

				<div className="auth-form__field">
					{errors.user?.password && <span className='auth-form__error'>{errors.user?.password}</span> }
					<input value={values.user?.password} onChange={handleChange} className='auth-form__input' id='user-password' type="password" name='password' placeholder='Type your password' />
					<label className='auth-form__label' htmlFor="user-password">Password</label>
				</div>

				<div className="auth-form__field">
					{errors.user?.passwordRepeat && <span className='auth-form__error'>{errors.user?.passwordRepeat}</span> }
					<input value={values.user?.passwordRepeat} onChange={handleChange} className='auth-form__input' id='user-password-repeat' type="password" name='passwordRepeat' placeholder='Repeat your password' />
					<label className='auth-form__label' htmlFor="user-password-repeat">Repeat password</label>
				</div>

				<div className='auth-form__action'>
					<input className='auth-form__input auth-form__submit' type="submit" />
				</div>
			</form>
		</>
	)
}

export default FormSignUp