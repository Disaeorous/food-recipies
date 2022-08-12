import React from 'react';
import './auth.scss';

import LogIn from './LogIn';
import SignUp from './SignUp';

function Auth() {
	return (
		<ul className='auth'>
			<LogIn />
			<SignUp />
		</ul>
	);
}

export default Auth;
