import React, { Component } from 'react'
import CashierList from './CashierList'

export default class CashierPanel extends Component {

	render() {
		console.log(this.props);
		return (
			<div className='cashiers_panel'>
				<CashierList data={this.props.data}/>
			</div>
		)
	}
}
