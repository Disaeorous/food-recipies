import React from 'react';
import './auth.scss';

import LogIn from './LogIn';
import SignUp from './SignUp';

function Auth() {
	return (
		<ul className='auth'>
			<LogIn />
			<p className='www'>Under modal</p>
			<SignUp />
		</ul>
	)
}

export default Auth