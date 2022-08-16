import React from 'react';
import './header.scss';

import Logo from '../../components/Logo';
import Auth from '../../components/Auth';
import User from '../../components/User';
import { HeaderNav as Nav, HeaderNavItems as Item } from './HeaderNav';
import Hamburger from '../../components/Hamburger/Hamburger';
import HamburgerMenu from '../../components/Hamburger/HamburgerMenu';

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<section className='header-wrapper'>
					<Logo />
					<Nav>
						{/* <Item component={<Auth />} /> */}
						{/* <Item component={<User />} /> */}
						<Item component={<Hamburger />} />
						<Item component={<HamburgerMenu />} />
					</Nav>
				</section>
			</div>
		</header>
	);
}

export default Header;
