import React, { Component } from 'react';
import Header from './Header';
import Laureate from './Laureate';

class App extends Component {
	state = {
		laureates: [],
		isLoaded: false,
		value: ''
	};

	componentDidMount() {

		const url = `http://api.nobelprize.org/v1/prize.json?category=economics`;
		fetch(url).then((response) => response.json()).then((data) => {
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
			<>
				<Header year={this.state.laureates} change={this.handleChange} />
				<div>{this.state.isLoaded ? laureates : 'Loading...'}</div>
			</>
		);
	}
}

export default App;
