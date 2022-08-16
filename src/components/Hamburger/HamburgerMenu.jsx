import React from 'react';

import Auth from '../../components/Auth';
import User from '../../components/User';
import {
	HeaderNav as Nav,
	HeaderNavItems as Item,
} from '../../pages/Header/HeaderNav';

function HamburgerMenu() {
	return (
		<div className='hamburger-menu'>
			<Nav>
				{/* <Item component={<Auth />} /> */}
				<Item component={<User />} />
			</Nav>
		</div>
	);
}

export default HamburgerMenu;
