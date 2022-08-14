import React from 'react';
import './header.scss';

import Logo from '../../components/Logo';
import Auth from '../../components/Auth';
import User from '../../components/User';
import { HeaderNav as Nav, HeaderNavItems as Item } from './HeaderNav';

import { CSSTransition } from 'react-transition-group';

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<section className='header-wrapper'>
					<Logo />
					<Nav>
						<Item component={<Auth />} />
						<Item component={<User />} />
					</Nav>
				</section>
			</div>
		</header>
	);
}

export default Header;
