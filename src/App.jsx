import './App.css';
import InputPanel from './components/InputPanel';
import React, { Component } from 'react'
import CashierPanel from './components/CashierPanel';

export default class App extends Component {

	state = {
		numOfCashiers: 3,
		customersInterval: 2,
		customersPerInterval: 2,
		minServeTime: 2,
		maxServeTime: 5
	}

	/** Добавляет данные из InputField в this.state. */
	handleInputChange(e) {
		if (!e.target.validity.valid) return
		this.setState({ [e.target.id]: +e.target.value })
	}

	render() {
		return (
			<div className="App">
				<InputPanel
					defaultValues={this.state}
					onChange={(e) => this.handleInputChange(e)}
				/>
				<CashierPanel
					data={this.state}
				/>
			</div>
		)
	}
}
