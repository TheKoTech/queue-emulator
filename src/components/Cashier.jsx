import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'
import CashierParam from './CashierParam'


function Cashier(props) {

	const randInt = (max) => Math.floor(Math.random() * max)

	const timeToServe = randInt(props.maxTime - props.minTime + 1) + props.minTime
	const [state, setState] = useState({
		timeToServe: timeToServe,
		curTimeToServe: timeToServe,
		amountServed: 0,
		avgTime: 0
	})
	useEffect(() => {
		if (props.paused) return
		const timer = setInterval(() => {
			setState(prevState => {
				if (prevState.timeToServe === 0) {
					const newAvgTime = (prevState.avgTime * prevState.amountServed + prevState.curTimeToServe) / (prevState.amountServed + 1)
					const newTimeToServe = randInt(props.maxTime - props.minTime + 1) + props.minTime
					props.onServed(props.id)
					return {
						...prevState,
						timeToServe: newTimeToServe,
						avgTime: newAvgTime,
						amountServed: prevState.amountServed + 1,
						curTimeToServe: newTimeToServe
					}
				} else {
					return {
						...prevState,
						timeToServe: prevState.timeToServe - 1
					}
				}
			})
		}, 1000)

		return () => {
			clearInterval(timer)
		}

	}, [props.minTime, props.maxTime, props.paused])

	const bgColor = props.stress > 0.5
		? `rgba(255, 0, 0, ${props.stress / 6})`
		: `rgba(0, 255, 50, ${(0.5 - props.stress) / 6})`


	return (
		<div
			className="cashier"
			style={{ background: bgColor }}
		>
			<h3>{props.title}</h3>
			<div className='param_list'>
				<CashierParam
					value={props.numOfCustomers}
					iconClass={'queue_icon'}
				/>
				<CashierParam
					value={state.timeToServe}
					iconClass={'time_icon'}
				/>
				<CashierParam
					value={state.avgTime.toFixed(1)}
					iconClass={'avg_icon'}
				/>
			</div>
		</div>
	)
}

Cashier.propTypes = {
	numOfCustomers: PropTypes.number,
	minTime: PropTypes.number,
	maxTime: PropTypes.number,
	onServed: PropTypes.func
}

export default Cashier