import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Body from './components/body/Body';
import 'font-awesome/css/font-awesome.css';

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
