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
		let inputs = {}
		if (!e.target.validity.valid) return
		inputs[e.target.id] = +e.target.value
		this.setState({data: inputs})

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
		const data = this.state.data
		return (
			<div className="App">
				<AttributePanel
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
