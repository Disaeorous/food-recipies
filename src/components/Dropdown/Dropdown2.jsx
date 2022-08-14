import React, { useState } from 'react';
import './dropdown.scss';

import { Link } from 'react-router-dom';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

import { CSSTransition } from 'react-transition-group';

export const Dropdown = () => {
	const [activeMenu, setActiveMenu] = useState('main'); // messages, settings

	const redirectToMenu = goToMenu => {
		return goToMenu && setActiveMenu(prev => (prev = goToMenu));
	};

	return (
		<div className='dropdown'>
			<CSSTransition
				in={activeMenu === 'main'}
				unmountOnExit
				timeout={450}
				classNames='dropdown-primary'
			>
				<DropdownMenu />
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'settings'}
				unmountOnExit
				timeout={450}
				classNames='dropdown-secondary'
			>
				<DropdownMenu />
			</CSSTransition>
		</div>
	);
};

export const DropdownMenu = () => {
	return (
		<div className='dropdown-menu'>
			<DropdownItem iconRight={<RiArrowRightSLine />} goToMenu={'main'}>
				My profile
			</DropdownItem>
			<DropdownItem iconLeft={<RiArrowLeftSLine />} goToMenu={'messages'}>
				Messages
			</DropdownItem>
			<DropdownItem iconRight={<RiArrowRightSLine />} goToMenu={'settings'}>
				Settings
			</DropdownItem>
		</div>
	);
};

export const DropdownItem = ({ children, iconLeft, iconRight, goToMenu }) => {
	const [activeMenu, setActiveMenu] = useState('main'); // messages, settings

	const redirectToMenu = () => {
		return goToMenu && setActiveMenu(prev => (prev = goToMenu));
	};

	return (
		<Link onClick={redirectToMenu} to={'/'} className='dropdown-item'>
			{iconLeft && <span className='icon-left'>{iconLeft}</span>}
			<p className='dropdown-text'>{children}</p>
			{iconRight && <span className='icon-right'>{iconRight}</span>}
		</Link>
	);
};
