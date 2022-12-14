import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';

import './carousel.scss';
import RecipieCard from '../Card';

function Carousel({ item, perPage = 3, perMove = 3, rewind = false }) {
	const splideOptions = {
		perPage,
		perMove,
		rewind,
		rewindByDrag: true,
		rewindSpeed: 850,
		speed: 850,
		autoplay: true,
		wheelSleep: 2,
		interval: 6300,
		gap: '1.4em',
		pagination: true,
		flickPower: 900,
		breakpoints: {
			640: {
				rewind: true,
				gap: '0.8em',
				perPage: 2,
				perMove: 2,
			},
			383: {
				gap: '0.2em',
				perPage: 1,
				perMove: 1,
			},
		},
	};

	return (
		<Splide options={splideOptions}>
			{item.map(recipe => {
				return (
					<SplideSlide key={recipe.id}>
						<RecipieCard
							id={recipe.id}
							title={recipe.title}
							image={recipe.image}
						/>
					</SplideSlide>
				);
			})}
		</Splide>
	);
}

export default Carousel;
