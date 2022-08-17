import React from 'react';
import './hamburger.scss';

import HamburgerMenu from './HamburgerMenu';

function Hamburger({ isOpen, closeModal, cb, ...props }) {
	return (
		<>
			<button
				onClick={cb}
				className={isOpen ? 'hamburger active' : 'hamburger'}
				type='button'
			>
				<span className='hamburger-line'></span>
			</button>

			<HamburgerMenu
				onClick={e => e.stopPropagation()}
				isOpen={true}
				closeModal={cb}
				className={isOpen ? 'hamburger-menu active' : 'hamburger-menu'}
			/>
		</>
	);
}

export default Hamburger;
