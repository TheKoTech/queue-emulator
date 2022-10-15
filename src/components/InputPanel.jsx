import React, { Component } from 'react'
import InputField from './InputField'

export default class AttributePanel extends Component {

	render() {
		return (
			// todo: убрать повторение кода.
			// Возможно, использовать массив объектов?
			<div className='attribute_panel'>
				<InputField
					id='numOfCashiers'
					label='Количество касс'
					onChange={(e) => this.props.onChange(e)}
					defaultValue={1}
				/>
				<InputField
					id='customersInterval'
					label='Интервал'
					onChange={(e) => this.props.onChange(e)}
					defaultValue={1}
				/>
				<InputField
					id='customersPerInterval'
					label='Количество'
					onChange={(e) => this.props.onChange(e)}
					defaultValue={1}
				/>
				<InputField
					id='minServeTime'
					label='Мин. время обслуживания'
					onChange={(e) => this.props.onChange(e)}
					defaultValue={1}
				/>
				<InputField
					id='maxServeTime'
					label='Макс. время обслуживания'
					onChange={(e) => this.props.onChange(e)}
					defaultValue={1}
				/>
			</div>
		)
	}
}
