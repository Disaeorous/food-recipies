import React from 'react';
import './header.scss';

import Logo from '../../components/Logo';
import Auth from '../../components/Auth';

function Header() {
	return (
		<header className='header'>
			<div className="container">

				<section className="header-wrapper">
					<Logo />
					<Auth />
				</section>
			</div>
		</header>
	)
}

export default Header