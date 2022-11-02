import './style.css';
import InputPanel from './components/InputPanel';
import React, { Component } from 'react'
import CashierPanel from './components/CashierPanel';

export default class App extends Component {

	state = {
		numOfCashiers: 1,
		customersInterval: 1,
		customersPerInterval: 1,
		minServeTime: 2,
		maxServeTime: 5,
		paused: false
	}

	/** Добавляет данные из InputField в this.state. */
	handleInputChange(e) {
		if (!e.target.validity.valid) return
		if (e.target.id === 'minServeTime' && +e.target.value > this.state.maxServeTime) return
		if (e.target.id === 'maxServeTime' && +e.target.value < this.state.minServeTime) return
		this.setState({ [e.target.id]: +e.target.value })
	}

	handlePause(e) {
		this.setState({
			paused: !this.state.paused
		})
	}

	render() {
		return (
			<div className="App">
				<InputPanel
					values={this.state}
					onChange={(e) => this.handleInputChange(e)}
					onPause={(e) => this.handlePause(e)}
				/>
				<CashierPanel {...this.state} />
			</div>
		)
	}
}
