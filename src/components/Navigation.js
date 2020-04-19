import React, {Component} from "react";

import {Link} from "react-router-dom";
import Scrollchor from 'react-scrollchor';
import Person from '@material-ui/icons/Person';

export default class Navigation extends Component {

	renderLogo() {
		if(this.props.isHome) {
			return (
				<Scrollchor to="#mainHeader" className="navLink">
					<div className="logo"> </div>
				</Scrollchor>
			)
		} else {
			return (
				<Link to="/">
					<div className="logo"> </div>
				</Link>
			)
		}
	}

	render() {

		return (
			<nav className="" id="mainNav">
				<div className="content grid fraction-auto">
					<aside className="logoContainer">
						{this.renderLogo()}
					</aside>

					<aside className="navContainer">
						<input type="checkbox" className="mobileCheckbox"/>
						<span className="mobileToggle"> </span>
						<span className="mobileToggle"> </span>
						<span className="mobileToggle"> </span>
						<ul>
							<li><Scrollchor to="#features" className="navLink">Features</Scrollchor></li>
							<li><Scrollchor to="#about" className="navLink">About</Scrollchor></li>
							<li><Scrollchor to="#contact" className="navLink">Contact</Scrollchor></li>
							<li className="user">
								<input type="checkbox" className="userOpenCheckbox"/>
								<span className="navLink">
									<Person style={{color: 'white'}} />
								</span>
							</li>
						</ul>
					</aside>
				</div>
			</nav>
		);
	}

}