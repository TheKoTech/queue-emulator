import React, { useEffect, useState } from 'react'
import Cashier from './Cashier'


function CashierList(props) {

	function randInt(max) {
		return Math.floor(Math.random() * max)
	}


	const [queueLengths, setQueueLengths] = useState(new Array(props.numOfCashiers).fill(0))
	useEffect(() => {
		setQueueLengths((prevQueue) => {
			let sumOfCustomers = 0
			prevQueue.forEach(num => { sumOfCustomers += num })
			const newQueue = new Array(props.numOfCashiers).fill(Math.floor(sumOfCustomers / props.numOfCashiers))

			for (let i = 0; i < sumOfCustomers % props.numOfCashiers; i++) {
				newQueue[i]++
			}

			return newQueue
		})
	}, [props.numOfCashiers])


	function onCashierServed(id) {
		setTimeout(() =>
			setQueueLengths((prevQueue) => {
				if (prevQueue[id] > 0) {
					const newQueue = [...prevQueue]
					newQueue[id]--
					return newQueue
				}
				return prevQueue
			}), 50
		)
	}


	const [cashierList, setCashierList] = useState()
	useEffect(() => {
		const cashierKeys = Array.from({ length: props.numOfCashiers }, (_, i) => i)
		const maxQueue = Math.max(...queueLengths)
		const minQueue = Math.min(...queueLengths)
		setCashierList(
			cashierKeys.map((val) =>
				<Cashier
					key={val}
					title={'Касса ' + (val + 1)}
					paused={props.paused || queueLengths[val] === 0}
					id={val}
					numOfCustomers={queueLengths[val]}
					minTime={props.minServeTime}
					maxTime={props.maxServeTime}
					onServed={onCashierServed}
					stress={(queueLengths[val] - minQueue) / (maxQueue - minQueue)}
				/>
			)
		)
	}, [queueLengths, props.paused, props.maxServeTime, props.minServeTime])


	let timeTillNextCustomers = randInt(props.customersInterval) + 1
	useEffect(() => {
		if (props.paused) return

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
		return () => clearInterval(timer)
	}, [props])


	return (
		<div className='cashier_list'>
			{cashierList}
		</div>
	)

}

export default CashierList