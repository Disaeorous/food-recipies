import React from 'react';
import User from '../../components/User';

import {
	HeaderNav as Nav,
	HeaderNavItems as Item,
} from '../../pages/Header/HeaderNav';
import LogIn from '../Auth/LogIn';
import SignUp from '../Auth/SignUp';

function HamburgerMenu({ isOpen, closeModal, ...props }) {
	if (!isOpen) return null;

	const buttonStyles = {
		fontSize: 'var(--fz-15)',
		lineHeight: 'var(--lh-15)',
		width: '100%',
	};

	return (
		<div {...props}>
			<Nav
				navStyles={{ width: '100%' }}
				style={{ flexDirection: 'column', width: '100%', padding: '1.5em' }}
			>
				<LogIn style={buttonStyles} liStyle={{ width: '100%' }} />
				<SignUp style={buttonStyles} liStyle={{ width: '100%' }} />
				<Item
					style={{ alignSelf: 'flex-end' }}
					component={
						<User
							style={{ width: '3.5rem', height: '3.5rem', display: 'block' }}
							icon={{ width: '1.6rem', height: '1.6rem' }}
						/>
					}
				/>
			</Nav>
		</div>
	);
}

export default HamburgerMenu;
