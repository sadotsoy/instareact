import React, { Component } from 'react';
import './navbar.css';
import 'font-awesome/css/font-awesome.css';
class Navbar extends Component {
	render() {
	return(
				<section>
					<div className = "nav-bar">
						<div className = "insta">
							<i className = "fa fa-instagram"></i>
							<span className = "instagram">
								<p>Instagram</p>
							</span>
							<span className = "search">
								<i className = "fa fa-search"></i>
								<input type="search" placeholder="Search"></input>
							</span>
							<span className ="social">
								<a href=""><i className ="fa fa-empire"></i></a>
								<a href=""><i className ="fa fa-heart-o"></i></a>
								<a href=""><i className ="fa fa-user-o"></i></a>
							</span>
						</div>
					</div>
				</section>
			);
	}
}

export default Navbar;
