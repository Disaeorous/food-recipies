import React from 'react';
import './notFound.scss';

import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className='not-found'>
			{/* <div id="background"></div> */}
				<div className="not-found__top">
					<h1>404</h1>
					<h3>page not found</h3>
				</div>
				<div className='not-found__right'>
					<div className="wrap">
						<div className="ghost-copy">
							<div className="one"></div>
							<div className="two"></div>
							<div className="three"></div>
							<div className="four"></div>
						</div>
						<div className="ghost">
							<div className="face">
								<div className="eye"></div>
								<div className="eye-right"></div>
								<div className="mouth"></div>
							</div>
						</div>
						<div className="shadow"></div>
					</div>
					<div className="bottom">
						<p>Boo, looks like a ghost stole this page!</p>
						<div className="buttons">
							<Link className="btn" to={'/'}>Go Home</Link>
						</div>
					</div>
				</div>
		</div>
	)
}

export default NotFound