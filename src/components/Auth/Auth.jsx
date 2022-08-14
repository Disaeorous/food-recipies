import React, { useState } from 'react';
import './auth.scss';

import LogIn from './LogIn';
import SignUp from './SignUp';

function Auth() {
	const [isLogged, setIsLogged] = useState(false);

	return (
		<>
			{!isLogged ? (
				<ul className='auth'>
					<LogIn />
					<SignUp />
				</ul>
			) : (
				<h1>w</h1>
			)}
		</>
	);
}

export default Auth;
