import React, { Component } from 'react'
import InputField from './InputField'
import Button from './Button'

export default class InputPanel extends Component {

	render() {

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

		const pauseButtonProps = {
			id: 'pauseButton',
			label: this.props.values.paused ? 'Возобновить' : 'Остановить'
		}

		const inputFields = inputFieldProps.map((prop) => (
			<InputField
				id={prop.id}
				label={prop.label}
				onChange={e => this.props.onChange(e)}
				value={this.props.values[prop.id]}
				key={prop.id}
			/>
		))

		return (
			<div className='input_panel'>
				<h1>Переменные</h1>
				<div className='input_list'>
					{inputFields}
					<Button
						id={pauseButtonProps.id}
						label={pauseButtonProps.label}
						onClick={e => this.props.onPause()}
						className={this.props.values.paused ? 'resume' : 'pause' }
					/>
				</div>
			</div>
		)
	}
}
