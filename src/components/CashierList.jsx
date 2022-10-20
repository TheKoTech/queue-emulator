import React, { Component } from 'react'
import Cashier from './Cashier'
import memoize from 'memoize-one'


export default class CashierList extends Component {

	randInt(max) {
		return Math.floor(Math.random() * max)
	}

	constructor(props) {
		super(props)
		this.state = {
			numOfCustomers: Array.from(
				{ length: props.data.numOfCashiers },
				() => 0
			),
			timeTillNextCustomers: Array.from(
				{ length: props.data.numOfCashiers },
				() => this.randInt(props.data.customersInterval + 1)
			)
		}
		// console.log(memoize)
	}

	componentDidMount() {
		// this.timer = setInterval(
		// 	() => {

		// 	},
		// 	1000)
	}

	componentWillUnmount() {
		clearInterval(this.timer)
	}

	/** Вызывается перед render(), когда обновляются props */
	static getDerivedStateFromProps(props, state) {
		
	}

	render() {
		const cashierKeys = []
		for (let i = 0; i < this.props.data.numOfCashiers; i++) {
			cashierKeys.push(i)
		}

		const cashierList = cashierKeys.map((key) =>
			<Cashier key={key} title={'Cashier ' + key} />
		)

		return (
			<div className='cashier_list'>
				{cashierList}
			</div>
		)
	}
}

