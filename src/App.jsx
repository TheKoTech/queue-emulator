import './App.css';
import InputPanel from './components/InputPanel';

import React, { Component } from 'react'
import CashierPanel from './components/CashierPanel';

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			numOfCashiers: 1,
			customersInterval: 1,
			customersPerInterval: 1,
			minServeTime: 1,
			maxServeTime: 2
		}
	}

	/** Добавляет данные из InputField в this.state. */
	handleInputChange(e) {
		let state = {}
		if (!e.target.validity.valid) return
		state[e.target.id] = +e.target.value
		this.setState(state)

	}

	componentDidMount() {
		// this.timer = setInterval(
		// 	() => {
		// 		// this.setState();
		// 	},
		// 	1000)
	}

	componentWillUnmount() {
		// clearInterval(this.timer)
	}

	render() {
		const data = this.state
		return (
			<div className="App">
				<InputPanel
					onChange={(e) => this.handleInputChange(e)}
				/>
				<CashierPanel
					key={data}
					data={data}
				/>
			</div>
		)
	}
}
