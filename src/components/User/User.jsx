import React, { useState } from 'react';
import './user.scss';

import { FaRegUser } from 'react-icons/fa';
import { Dropdown } from '../Dropdown/Dropdown';

function User() {
	const [isOpen, setIsOpen] = useState(false);

	const openHandler = () => {
		return setIsOpen(prev => !prev);
	};

	return (
		<>
			<button onClick={openHandler} className='user-avatar' type='button'>
				<FaRegUser />
			</button>

			{isOpen && <Dropdown />}
		</>
	);
}

export default User;
