import React, { useRef, useState } from 'react';
import './user.scss';

import { FaRegUser } from 'react-icons/fa';
import { Dropdown } from '../Dropdown/Dropdown';

function User({ icon, ...props }) {
	const [isOpen, setIsOpen] = useState(false);
	// const refActive = useRef();

	const openHandler = () => {
		// const active = refActive.current;
		// active.classList.add('active');
		// console.log(`Active: ${active}`);
		return setIsOpen(prev => !prev);
	};

	return (
		<>
			<button
				// ref={refActive}
				onClick={openHandler}
				className='user-avatar'
				type='button'
				{...props}
			>
				<FaRegUser style={icon} />
			</button>

			{isOpen && <Dropdown />}
			{/* {!isOpen && refActive.current.classList.remove('active')} */}
		</>
	);
}

export default User;
