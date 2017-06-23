import React, { Component } from 'react';
import './body.css';
import Info from './info/Info';

class Body extends Component {
	render() {
	return(
				<section className = "bdy">
					<Info/>
				</section>
			);
	}
}

export default Body;
