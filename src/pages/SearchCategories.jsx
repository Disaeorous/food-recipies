import React from 'react';

import Search from '../components/Search';
import Categories from '../components/Categories';

function SearchCategories() {
	return (
		<div className='search-categories container'>
			<Search />
			<Categories />
		</div>
	);
}

export default SearchCategories;
