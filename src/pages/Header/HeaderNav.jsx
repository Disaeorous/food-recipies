import React from 'react';

export const HeaderNav = ({ children }) => {
	return (
		<nav className='header-nav'>
			<ul className='header-nav__list'>{children}</ul>
		</nav>
	);
};

export const HeaderNavItems = ({ component }) => {
	return <li className='header-nav__item'>{component}</li>;
};
