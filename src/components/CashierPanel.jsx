import React, { Component } from 'react'
import CashierList from './CashierList'

export default class CashierPanel extends Component {

	constructor(props) {
		super(props)
		this.state = {
			
		}
	}

	render() {
		return (
			<div className='cashiers_panel'>
				<CashierList data={this.props.data} />
			</div>
		)
	}
}
