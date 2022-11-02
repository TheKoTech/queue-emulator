import CashierList from './CashierList'
import React from 'react'


export default function CashierPanel(props) {
	return (
		<div className='cashiers_panel'>
			<h1>
				Кассы
			</h1>
			<CashierList {...props} />
		</div>
	)
}
