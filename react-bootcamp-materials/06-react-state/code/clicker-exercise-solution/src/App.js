import React, { Component } from 'react';
import Clicker from './Clicker';
import Demo from './Demo';
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
          isManager: yes,
		  isCool:no,
		  hasGirl:no 
		};
	}
	render() {
		return (
			<div className="App">
				<Demo  animal = "BobCat" food = "Mango"/>
				<Demo animal="Lion" food="Pasta" />
				<Clicker />
			</div>
		);
	}
}

export default App;
