import React, { Component } from 'react'
import PropTypes, { number } from 'prop-types';


export default class Cashier extends Component {
	
	 static propTypes = {
		numOfCustomers: PropTypes.number,
		minTime: PropTypes.number,
		maxTime: PropTypes.number
	}
	
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>Cashier</div>
		)
	}
}
