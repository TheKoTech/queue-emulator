import React, { Component } from 'react'
import CashierList from './CashierList'

export default class CashierPanel extends Component {

	constructor(props) {
		super(props)
		this.state = {
			data: null
		}
	}

	// static getDerivedStateFromProps(props, state) {
	// 	if (props.data !== state.data) {
	// 		return {
	// 			data: props.data
	// 		}
	// 	}
	// 	return null
	// }

	render() {
		return (
			<div className='cashiers_panel'>
				<CashierList data={this.props.data} />
			</div>
		)
	}
}
