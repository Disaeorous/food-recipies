import React from 'react'
import './recipieCard.scss'

function RecipieCard( {image, title} ) {
	return (
		<article className='recipies-item'>
			<a className='recipies-item__link' href='/'>
				<img className='recipies-img' src={image} alt={title} />
			</a>
			<p className='recipies-title' >{title}</p>
		</article>
	)
}

export default RecipieCard