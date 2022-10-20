import React, { Component } from 'react'
import InputField from './InputField'
import PropTypes from 'prop-types'

export default class InputPanel extends Component {

	/** Как я без этого жил, мммм статическая типизация */
	static propTypes = {
		/** Событие изменения одного из InputField */
		onChange: PropTypes.func
	}

	render() {

		// В каждом поле можно указать по доп. объекту, в каджом свой defaultValue.
		const inputLabels = {
			numOfCashiers: 'Количество касс',
			customersInterval: 'Интервал',
			customersPerInterval: 'Количество',
			minServeTime: 'Мин. время',
			maxServeTime: 'Макс. время'
		}

		const inputFields = []
		for (const property in inputLabels) {
			inputFields.push(
				<InputField
					id={property}
					label={inputLabels[property]}
					onChange={e => this.props.onChange(e)}
					defaultValue={1}
					key={inputLabels[property]}
				/>
			)
		}

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
