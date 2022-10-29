import React, { Component } from 'react'
import CashierList from './CashierList'


export default class CashierPanel extends Component {
	render() {
		return (
			<div className='cashiers_panel'>
				<h1>
					Кассы
				</h1>
				<CashierList {...this.props.data} />
			</div>
		)
	}
}
