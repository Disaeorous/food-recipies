import React, { useContext, useEffect, useState } from 'react';
import './dropdown.scss';

import { Link, useNavigate } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import { CSSTransition } from 'react-transition-group';

// export const DropdownMenu = () => {
// 	return (
// 		<div className='dropdown-menu'>
// 			<DropdownItem iconRight={<RiArrowRightSLine />} goToMenu={'main'}>
// 				My profile
// 			</DropdownItem>
// 			<DropdownItem iconLeft={<RiArrowLeftSLine />} goToMenu={'messages'}>
// 				Messages
// 			</DropdownItem>
// 			<DropdownItem iconRight={<RiArrowRightSLine />} goToMenu={'settings'}>
// 				Settings
// 			</DropdownItem>
// 		</div>
// 	);
// };

// export const DropdownItem = ({ children, iconLeft, iconRight, goToMenu }) => {
// 	const [activeMenu, setActiveMenu] = useState('main'); // messages, settings

// 	const redirectToMenu = () => {
// 		console.log(`goToMenu: ${goToMenu}`);
// 		return setActiveMenu(prev => (prev = goToMenu));
// 	};

// 	return (
// 		<Link onClick={redirectToMenu} to={'/'} className='dropdown-item'>
// 			<ActiveMenuContext.Provider value={activeMenu}>
// 				{console.log(`activeMenu: ${activeMenu}`)}
// 				{iconLeft && <span className='icon-left'>{iconLeft}</span>}
// 				<p className='dropdown-text'>{children}</p>
// 				{iconRight && <span className='icon-right'>{iconRight}</span>}
// 			</ActiveMenuContext.Provider>
// 		</Link>
// 	);
// };

export const Dropdown = () => {
	const [activeMenu, setActiveMenu] = useState('main'); // messages, settings
	const [menuHeight, setMenuHeight] = useState(null);

	function calcHeight(el) {
		const height = el.offsetHeight;
		setMenuHeight(height);
	}

	const linkActiveStyles = {
		color: 'var(--blue-text)',
		fill: 'var(--blue-text)',
		textDecoration: 'underline',
		'--blue-l': '90%',
		backgroundColor: 'hsl(var(--blue-h), var(--blue-s), var(--blue-l))',
	};

	function DropdownItem({
		children,
		iconLeft,
		iconRight,
		goToMenu,
		navigateTo,
		styles,
	}) {
		const redirectToMenu = () => {
			return goToMenu && setActiveMenu(goToMenu);
		};

		// styles = {
		// 	color: 'var(--blue-text)',
		// 	fill: 'var(--blue-text)',
		// 	textDecoration: 'underline',
		// 	'--blue-l': '90%',
		// 	backgroundColor: 'hsl(var(--blue-h), var(--blue-s), var(--blue-l))',
		// };

		return (
			<Link
				onClick={redirectToMenu}
				to={navigateTo ? navigateTo : '#'}
				className='dropdown-item'
				style={styles}
			>
				{iconLeft && <span className='icon-left'>{iconLeft}</span>}
				<p className='dropdown-text'>{children}</p>
				{iconRight && <span className='icon-right'>{iconRight}</span>}
			</Link>
		);
	}

	return (
		<div className='dropdown' style={{ height: menuHeight }}>
			<CSSTransition
				in={activeMenu === 'main'}
				unmountOnExit
				timeout={450}
				onEnter={calcHeight}
				classNames='menu-primary'
			>
				<div className='menu'>
					<DropdownItem navigateTo={'/settings/'}>My profile</DropdownItem>
					<DropdownItem iconRight={<RiArrowRightSLine />} goToMenu='messages'>
						Messages
					</DropdownItem>
					<DropdownItem iconRight={<RiArrowRightSLine />} goToMenu='settings'>
						Settings
					</DropdownItem>
					<DropdownItem navigateTo={'/'}>logout</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'messages'}
				unmountOnExit
				timeout={450}
				onEnter={calcHeight}
				classNames='menu-secondary'
			>
				<div className='menu'>
					<DropdownItem
						styles={linkActiveStyles}
						iconLeft={<RiArrowLeftSLine />}
						goToMenu='main'
					>
						Messages
					</DropdownItem>
					<DropdownItem navigateTo={'messages/hot/'}>Hot</DropdownItem>
					<DropdownItem navigateTo={'messages/recently/'}>
						Recently
					</DropdownItem>
					<DropdownItem navigateTo={'messages/important/'}>
						Important
					</DropdownItem>
					<DropdownItem navigateTo={'messages/events/'}>Events</DropdownItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'settings'}
				unmountOnExit
				timeout={450}
				onEnter={calcHeight}
				classNames='menu-secondary'
			>
				<div className='menu'>
					<DropdownItem
						styles={linkActiveStyles}
						iconLeft={<RiArrowLeftSLine />}
						goToMenu='main'
					>
						Settings
					</DropdownItem>
					<DropdownItem navigateTo={'/settings/preferences/'}>
						Preferences
					</DropdownItem>
					<DropdownItem navigateTo={'/settings/bio/'}>BIO</DropdownItem>
				</div>
			</CSSTransition>
		</div>
	);
};
