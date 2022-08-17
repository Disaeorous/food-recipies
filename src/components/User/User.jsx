import React, { useEffect, useRef, useState } from 'react';
import './user.scss';

import { FaRegUser } from 'react-icons/fa';
import { Dropdown } from '../Dropdown/Dropdown';
import { useMediaQuery } from '../../hooks/useMediaQuery';

function User({ icon, isActive, media, ...props }) {
	const [isOpen, setIsOpen] = useState(false);
	const refActive = useRef();
	const test = useMediaQuery('(min-width: 568px)');

	const openHandler = () => {
		return setIsOpen(prev => !prev);
	};

	useEffect(() => {
		const clickedOutside = e => {
			if (
				isOpen &&
				refActive.current &&
				!refActive.current.contains(e.target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', clickedOutside);

		return () => {
			document.removeEventListener('mousedown', clickedOutside);
		};
	}, [isOpen]);

	// if (!isOpen) return null;

	return (
		<>
			<div ref={refActive}>
				<button
					onClick={openHandler}
					className='user-avatar'
					type='button'
					{...props}
				>
					<FaRegUser style={icon} />
				</button>

				{isOpen && media && <Dropdown isActive={isActive} />}

				{/* <Dropdown style={{ display: 'flex', scale: '1' }} isActive={isOpen} /> */}

				{/* {!test ? console.log('568') : console.log('wtf')} */}
				{/* {isBlock ? console.log('568') : console.log('wtf')} */}
				{/* {isOpen && !isBlock && <Dropdown style={{ display: 'flex' }} />} */}
				{/* {test && <Dropdown isActive={false} />} */}
			</div>
		</>
	);
}

export default User;
