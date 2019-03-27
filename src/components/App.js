import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Laureate from './Laureate';

class App extends Component {
	state = {
		laureates: [],
		isLoaded: false,
		value: ''
	};

	componentDidMount() {
		// const url = `http://api.nobelprize.org/v1/prize.json?category=economics`;
		const url = '/economics.json';
		fetch(process.env.PUBLIC_URL + url).then((response) => response.json()).then((data) => {
			this.setState({
				laureates: data.prizes,
				isLoaded: true
			});
		});
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});

		const targetId = `#Y${e.target.value}`;
		document.querySelector(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	render() {
		const laureates = this.state.laureates.map((laureate) => (
			<Laureate key={laureate.year} data={laureate} />
		));

		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Header year={this.state.laureates} change={this.handleChange} />
				{this.state.isLoaded ? laureates : <h1 style={{ textAlign: 'center' }}>Loading...</h1>}
			</Router>
		);
	}
}

export default App;
