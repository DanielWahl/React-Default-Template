import React, {Component} from "react";

import {Link} from "react-router-dom";
import Scrollchor from 'react-scrollchor';

export default class Footer extends Component {

	render() {

		return (
			<footer>

				<div className="content">

					<Scrollchor to="#mainHeader" className="navLink">
						<div className="goToTopButton">
							<span>&#10094;</span>
						</div>
					</Scrollchor>

					<p>
						&copy; by Marcel’s Strebergruppe - Created with React and love - <Link to="/impressum">Impressum & Datenschutz</Link>
					</p>
				</div>
			</footer>
		);
	}

}