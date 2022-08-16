import React, { useState } from 'react';
import './hamburger.scss';

function Hamburger() {
	const [active, setActive] = useState(false);

	const activeHandler = () => {
		return setActive(prevState => !prevState);
	};

	return (
		<button
			onClick={activeHandler}
			className={active ? 'hamburger active' : 'hamburger'}
			type='button'
		>
			<span className='hamburger-line'></span>
		</button>
	);
}

export default Hamburger;
