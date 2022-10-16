import React from 'react'
import Cashier from './Cashier'

export default function CashierList(props) {

	// console.log(props.data)

	const cashierKeys = []
	for (let i = 0; i < props.data.numOfCashiers; i++) {
		cashierKeys.push(i)
	}

	const cashierList = cashierKeys.map((key) =>
		<Cashier key={key} />
	)

	return (
		<ul>
			{cashierList}
		</ul>
	)
}
