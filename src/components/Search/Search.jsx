import React, { useEffect, useState } from 'react';

import './search.scss'
import { FaSearch } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';

function Search() {

	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const submitHandler = (event) => {
		event.preventDefault();
		navigate('/search/' + input);
	}

	return (
		<form className='search-form' onSubmit={submitHandler}>
			<input 
				className='search-input'
				id="search-input"
				type="text"
				placeholder='Search recipe'
				onChange={(event) => {
					return setInput(event.target.value)
				}}
				value={input}
			/>
			<label className='search-label' htmlFor="search-input" onClick={submitHandler}>
				<FaSearch></FaSearch>
			</label>
		</form>
	)
}

export default Search