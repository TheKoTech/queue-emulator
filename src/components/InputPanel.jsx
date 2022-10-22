import React, { Component } from 'react'
import InputField from './InputField'
import PropTypes from 'prop-types'

export default class InputPanel extends Component {

	/** Как я без этого жил, мммм статическая типизация */
	static propTypes = {
		defaultValues: PropTypes.object,
		onChange: PropTypes.func
	}

	render() {

		// В каждом поле можно указать по доп. объекту, в каджом свой defaultValue.

		const inputFieldProps = [
			{
				id: 'numOfCashiers',
				label: 'Количество касс',
			},
			{
				id: 'customersInterval',
				label: 'Интервал',
			},
			{
				id: 'customersPerInterval',
				label: 'Покупателей',
			},
			{
				id: 'minServeTime',
				label: 'Мин. время',
			},
			{
				id: 'maxServeTime',
				label: 'Макс. время',
			}
		]

		const inputFields = inputFieldProps.map((prop) => (
			<InputField
				id={prop.id}
				label={prop.label}
				onChange={e => this.props.onChange(e)}
				defaultValue={this.props.defaultValues[prop.id]}
				key={prop.id}
			/>
		))

		return (
			<div className='input_panel'>
				<h1>Переменные</h1>
				<div className='input_list'>
					{inputFields}
				</div>
			</div>
		)
	}
}
