import React, { useEffect, useState } from 'react'
import Cashier from './Cashier'


function CashierList(props) {

	function randInt(max) {
		return Math.floor(Math.random() * max)
	}

	const [cashierList, setCashierList] = useState()

	useEffect(() => {

		const cashierKeys = []
		const cashierQueueLengths = []

		for (let i = 0; i < props.numOfCashiers; i++) {
			cashierKeys.push(i)
			cashierQueueLengths.push(0)
		}

		setCashierList(
			cashierKeys.map((key, i) =>
				<Cashier
					key={key}
					title={'Cashier ' + (key + 1)}
					numOfCustomers={cashierQueueLengths[i]}
					minTime={props.minServeTime}
					maxTime={props.maxServeTime}
				/>
			)
		)
	}, [props.numOfCashiers])

	let timeTillNextCustomers = randInt(props.customersInterval)

	useEffect(() => {
		const timer = setInterval(() => {
			if (timeTillNextCustomers === 0) {
				timeTillNextCustomers = randInt(props.customersInterval)
			} else {
				timeTillNextCustomers--
			}
			console.log(timeTillNextCustomers)
		}, 1000)
		return () => clearInterval(timer)
	})


	return (
		<div className='cashier_list'>
			{cashierList}
		</div>
	)

}

export default CashierList