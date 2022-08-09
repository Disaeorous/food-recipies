import React from 'react';
import './skeleton.scss';

import SkeletonDish from './SkeletonDish';
import SkeletonCircular from './SkeletonCircular';

function Skeleton( {type="dish", count} ) {
	const COUNTER = count;

	return (
		<div className='skeleton'>
			<div className='skeleton-wrapper'>
				{/* { type === "dish" ? <SkeletonDish count={COUNTER} /> : <h2>wtf</h2> }  */}
				{/* { type === "circle" ? <SkeletonCircular /> : <h2>wtf</h2> }  */}
				{ type === "dish" && <SkeletonDish count={COUNTER} /> } 
				{ type === "circle" && <SkeletonCircular /> } 
			</div>
		</div>
	)
}

export default Skeleton