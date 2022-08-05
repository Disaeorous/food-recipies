import React from 'react';

import './header.scss';
import { ImSpoonKnife } from 'react-icons/im';

import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className='header'>
			<div className="container">
				<Link className='logo' to={'/'} >
					<ImSpoonKnife className='logo-img' />
					<span className='logo-brand'>Go to home</span>
				</Link>
			</div>
		</header>
	)
}

export default Header