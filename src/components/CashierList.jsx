import React, { Component } from 'react'
import Cashier from './Cashier'
// import memoize from 'memoize-one'


function randInt(max) {
	return Math.floor(Math.random() * max)
}


export default class CashierList extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	static getDerivedStateFromProps(props, state) {
		// if (state.timerID !== undefined) {
		// 	clearInterval(state.timerID)
		// }

		// return {
		// 	timerID: setInterval(() => {
				
		// 	}, 1000)
		// }
		return null
	}

	componentWillUnmount() {
		clearInterval(this.state.timerID)
	}

	render() {
		console.log('CashierList.jsx: render()')
		const cashierKeys = []
		for (let i = 0; i < this.props.data.numOfCashiers; i++) {
			cashierKeys.push(i)
		}

		const cashierList = cashierKeys.map((key) =>
			< Cashier
				key={key}
				title={'Cashier ' + (key + 1)}
				// Заглушка
				numOfCustomers={randInt(4)}
				minTime={randInt(4)}
				maxTime={randInt(2) + 3}
			/>
		)

		return (
			<div className='cashier_list'>
				{cashierList}
			</div>
		)
	}
}
