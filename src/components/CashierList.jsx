import React, { Component } from 'react'
import Cashier from './Cashier'


function randInt(max) {
	return Math.floor(Math.random() * max)
}


export default class CashierList extends Component {

	constructor(props) {

		super(props)
		this.timerID = this.getTimer()
		this.interval = props.data.customersInterval
		this.timeTillNextCustomers = randInt(props.data.customersInterval)

	}

	getTimer() {
		return setInterval(
			() => this.tick(),
			1000)
	}

	tick() {
		
		if (this.timeTillNextCustomers === 0) {
			this.timeTillNextCustomers = randInt(this.props.data.customersInterval)
		} else {
			this.timeTillNextCustomers--
		}
		console.log(this.timeTillNextCustomers)

	}

	componentWillUnmount() {
		clearInterval(this.timerID)
		console.log('timeout cleared')
	}

	render() {

		if (this.interval !== this.props.data.customersInterval) {
			clearInterval(this.timerID)
			this.timerID = this.getTimer(this.props.data.customersInterval)
			this.interval = this.props.data.customersInterval
		}

		if (this.props.data.customersInterval < this.interval) {
			//todo: перераспределить очереди
		}
		if (this.props.data.customersInterval > this.interval) {
			//todo: перераспределить очереди
		}
		
		const cashierKeys = []
		this.cashierQueueLengths = []

		for (let i = 0; i < this.props.data.numOfCashiers; i++) {
			cashierKeys.push(i)
			this.cashierQueueLengths.push(0)
		}
		
		this.cashierList =	cashierKeys.map((key, i) =>
			<Cashier
				key={key}
				title={'Cashier ' + (key + 1)}
				numOfCustomers={this.cashierQueueLengths[i]}
				minTime={this.props.data.minServeTime}
				maxTime={this.props.data.maxServeTime}
			/>
		)

		console.log('CashierList.jsx: render()')

		return (
			<div className='cashier_list'>
				{this.state.cashierList}
			</div>
		)
	}

}


// export default function CashierList() {

// 	useEffect(() => {
		
// 		const timerID = this.getTimer()
// 		const interval = props.data.customersInterval
// 		const timeTillNextCustomers = randInt(props.data.customersInterval)

// 	}) 

// 	return (
// 		<div>CashierList</div>
// 	)
// }
