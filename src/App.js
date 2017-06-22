import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from './components/navbar/Navbar';
import Body from './components/body/Body';

class App extends Component {
  render() {
    return (
				<section>
					<div>
						<Navbar/>
					</div>
					<div>
						<Body/>
					</div>
				</section>
    );
  }
}

export default App;
