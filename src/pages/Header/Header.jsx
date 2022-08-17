import React, { useState, useRef } from 'react';
import './header.scss';

import Logo from '../../components/Logo';
import Auth from '../../components/Auth';
import User from '../../components/User';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { HeaderNav as Nav, HeaderNavItems as Item } from './HeaderNav';
import Hamburger from '../../components/Hamburger/Hamburger';

function Header() {
	const [active, setActive] = useState(false);
	const activeRef = useRef(active);
	const isBlock = useMediaQuery('(min-width: 568px)');

	const activeHandler = () => {
		return setActive(prevState => !prevState);
	};

	const closeHandler = () => {
		return setActive(prev => (prev = false));
	};

	return (
		<>
			{active && !isBlock && (
				<div onClick={activeHandler} className='overlay'></div>
			)}
			<header style={{ marginTop: '0' }} className='header'>
				<div className='container'>
					<section className='header-wrapper'>
						<Logo onClick={(activeRef.current = closeHandler)} />
						<Nav>
							<Item component={<Auth />} />
							<Item component={<User />} />
							<Item
								component={<Hamburger isOpen={active} cb={activeHandler} />}
							/>
						</Nav>
					</section>
				</div>
			</header>
		</>
	);
}

export default Header;
