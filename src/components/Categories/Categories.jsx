import React from 'react'
import './categories.scss';

import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiCroissant } from "react-icons/gi";

import {
	NavLink
} from 'react-router-dom';

function Categories() {

	return (
		<section className='categories'>
			<nav className='categories-nav'>

				<ul className='categories-list'>
					<li className='categories-item'>
						<NavLink className='categories-link' to={"/cuisine/Italian"}>
							<span>Italian</span>
							<FaPizzaSlice />
						</NavLink>
					</li>

					<li className='categories-item'>
						<NavLink className='categories-link' to={"/cuisine/American"}>
							<span>American</span>
							<FaHamburger />
						</NavLink>
					</li>

					<li className='categories-item'>
						<NavLink className='categories-link' to={"/cuisine/Thai"}>
							<span>Thai</span>
							<GiNoodles />
						</NavLink>
					</li>

					<li className='categories-item'>
						<NavLink className='categories-link' to={"/cuisine/French"}>
							<span>French</span>
							<GiCroissant />
						</NavLink>
					</li>
				</ul>

			</nav>
		</section>
	)
}

export default Categories