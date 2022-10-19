import './App.css';
import InputPanel from './components/InputPanel';

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

	/** Добавляет данные из InputField в this.state. */
	handleInputChange(e) {
		// setState() принимает объект, поэтому заполняем объект единственным значением и добавляем в this.state
		let newData = {}
		if (!e.target.validity.valid) return
		newData[e.target.id] = +e.target.value
		this.setState({ data: newData })
	}

	render() {
		const data = this.state.data
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
