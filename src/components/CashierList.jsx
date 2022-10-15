import React from 'react'
import Cashier from './Cashier'

export default function CashierList(props) {

	const cashierKeys = []
	for (let i = 0; i < props.amount; i++) {
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
