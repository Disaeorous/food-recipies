import React from 'react'
import './dishes.scss'

import Popular from './Popular'
import Veggie from './Veggie'

function Dishes() {
	return (
		<section className='dishes'>
			<Popular title='Popular' />
			<Veggie title='Vegetarian' />
		</section>
	)
}

export default Dishes