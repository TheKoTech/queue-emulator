import React, { useEffect, useState } from 'react'
import Cashier from './Cashier'


function CashierList(props) {

	function randInt(max) {
		return Math.floor(Math.random() * max)
	}


	const [queueLengths, setQueueLengths] = useState(new Array(props.numOfCashiers).fill(0))
	useEffect(() => {
		console.log('reset');
		setQueueLengths(new Array(props.numOfCashiers).fill(0))
	}, [props.numOfCashiers])


	const [cashierList, setCashierList] = useState()
	useEffect(() => {
		const cashierKeys = Array.from({ length: props.numOfCashiers }, (_, i) => i)
		setCashierList(
			cashierKeys.map((key, i) =>
				<Cashier key={key}
					title={'Касса ' + (key + 1)}
					numOfCustomers={queueLengths[i]}
					minTime={props.minServeTime}
					maxTime={props.maxServeTime}
				/>
			)
		)
	}, [queueLengths])


	let timeTillNextCustomers = randInt(props.customersInterval) + 1
	useEffect(() => {
		const timer = setInterval(() => {
			if (timeTillNextCustomers === 0) {

				timeTillNextCustomers = randInt(props.customersInterval) + 1

				setQueueLengths((oldQueues) => {
					const newQueues = [...oldQueues]
					const newCustomers = randInt(props.customersPerInterval + 1)

					for (let i = 0; i < newCustomers; i++) {
						newQueues[newQueues.indexOf(Math.min(...newQueues))]++
					}

					return newQueues
				})

			}
			timeTillNextCustomers--
		}, 1000)
		console.log('new timer')
		return () => clearInterval(timer)
	}, [props.customersInterval, props.customersPerInterval])


	return (
		<div className='cashier_list'>
			{cashierList}
		</div>
	)

}

export default CashierList