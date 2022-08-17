import React from 'react';

export const HeaderNav = ({ children, navStyles, ...props }) => {
	return (
		<nav style={navStyles} className='header-nav'>
			<ul {...props} className='header-nav__list'>
				{children}
			</ul>
		</nav>
	);
};

export const HeaderNavItems = ({ component, ...props }) => {
	return (
		<li {...props} className='header-nav__item'>
			{component}
		</li>
	);
};
