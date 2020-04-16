import React, {Component} from "react";

export default class Navigation extends Component {

	render() {

		return (
			<nav>
				<div className="content">
					<aside className="logoContainer">
						<div className="logo"> </div>
					</aside>

					<aside className="navContainer">
						<input type="checkbox" />
						<span> </span>
						<span> </span>
						<span> </span>
						<ul>
							<li>Home</li>
							<li>Register</li>
							<li>Impressum</li>
						</ul>
					</aside>
				</div>
			</nav>
		);
	}

}