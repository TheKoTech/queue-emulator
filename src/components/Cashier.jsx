import React, { Component } from 'react'
import PropTypes, { number } from 'prop-types';


export default class Cashier extends Component {

	static propTypes = {
		numOfCustomers: PropTypes.number,
		minTime: PropTypes.number,
		maxTime: PropTypes.number
	}

	render() {
		return (

			<div className='cashier'>
				<h3>{this.props.title}</h3>
				<div className='cashier_inputs'>
					<span className='queue_icon' />
					{/* todo: finish the card. Add mintime and maxtime. They must be overriden by state */}
					<span className='queue'>{this.props.numOfCustomers}</span>
				</div>
			</div>
		)
	}
}
