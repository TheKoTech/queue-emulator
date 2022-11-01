import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useEffect } from 'react'



function Cashier(props) {

	const [timeToServe, setTimeToServe] = useState(
		Math.floor(Math.random() * (props.maxTime - props.minTime)) + props.minTime
	)
	useEffect(() => {
		console.log('Cashier.jsx: new timer')
		const timer = setInterval(() => {
			setTimeToServe((prevTimeToServe) => {
				if (prevTimeToServe === 0) {
					props.onServed(props.id)
					return Math.floor(Math.random() * (props.maxTime - props.minTime)) + props.minTime
				} else {
					return prevTimeToServe - 1
				}
			}
			)
		}, 1000)

		return () => {
			console.log('clear()')
			clearInterval(timer)
		}

	}, [props.minTime, props.maxTime])

	return (
		<div className="cashier">
			<h3>{props.title}</h3>
			<div className="param_list">
				<div className="param_box">
					<span className="queue_icon" />
					<span className="param_label">
						{props.numOfCustomers}
					</span>
				</div>
				<div className="param_box">
					<span className="time_icon" />
					<span className="param_label">
						{timeToServe}
					</span>
				</div>
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