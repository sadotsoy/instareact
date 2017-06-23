import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './info.css';

class Info extends Component {
	render() {
		return(
					<section className ="Info">
						<div className ="UserPhoto">
							<a href=""><img src="https://scontent-sjc2-1.cdninstagram.com/t51.2885-19/s150x150/18809061_1371429819617308_6043064258722267136_a.jpg" alt=""/></a>
						</div>
						<div className ="UserTool">
							<p className ="UserName">sadotsoy</p>
							<button className ="EditProfile">Edit Profile</button>
							<a href=""><i className ="fa fa-gear"></i></a>
						</div>
					</section>
				);
	}
}

export default Info;
