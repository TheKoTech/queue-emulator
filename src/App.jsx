import './App.css';
import AttributePanel from './components/InputPanel';

import React, { Component } from 'react'
import CashierPanel from './components/CashierPanel';

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			data: {
				numOfCashiers: 1,
				customersInterval: 1,
				customersPerInterval: 1,
				minServeTime: 1,
				maxServeTime: 2
			}
		}
	}

	handleInputChange(e) {
		let state = {}
		if (!e.target.validity.valid) return
		state[e.target.id] = +e.target.value
		this.setState(state, () => console.log(this.state))
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
		return (
			<div className="App">
				<AttributePanel
					onChange={(e) => this.handleInputChange(e)}
				/>
				<CashierPanel
					data={this.state.data}
				/>
			</div>
		)
	}
}
