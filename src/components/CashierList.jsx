import React, { useEffect, useState } from 'react'
import Cashier from './Cashier'


function randInt(max) {
	return Math.floor(Math.random() * max)
}

function CashierList(props) {

	let timeTillNextCustomers = randInt(props.customersInterval)

	useEffect(() => {
		const timer = setInterval(() => tick(), 1000)
		return () => clearInterval(timer)
	})


	function tick() {
		if (timeTillNextCustomers === 0) {
			timeTillNextCustomers = randInt(props.customersInterval)
		} else {
			timeTillNextCustomers--
		}
		console.log(timeTillNextCustomers)
	}


	return (
		<div className='cashier_list'>

		</div>
	)

}

export default CashierList