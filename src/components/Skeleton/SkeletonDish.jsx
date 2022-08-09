import React from 'react';

function SkeletonDish( {count=4} ) {
	return (
		<>
			{ Array.from(Array(count), (_, i) =>
				<div key={i} className='skeleton-dish'>
					<div className="skeleton-img"></div>
					<div className='skeleton-description'>
						<div className="skeleton-subtitle"></div>
						<div className="skeleton-text"></div>
					</div>
				</div>
			) }
		</>
	)
}

export default SkeletonDish;