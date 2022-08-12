import React from 'react';
import './logo.scss';

import { ImSpoonKnife } from 'react-icons/im';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<Link className='logo' to={'/'}>
			<ImSpoonKnife className='logo-img' />
			<span className='logo-brand'>Go to home</span>
		</Link>
	);
}

export default Logo;
