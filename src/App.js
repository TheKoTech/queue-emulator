import './App.css';
import AttributePanel from './components/AttributePanel';

import React, { Component } from 'react'

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			inputs: {
				numOfCashiers: 1,
				customersInterval: 1,
				customersPerInterval: 1,
				minServeTime: 1,
				maxServeTime: 2
			}
		}
	}

	render() {
		return (
			<div className="App">
				<AttributePanel/>
			</div>
		)
	}
}
