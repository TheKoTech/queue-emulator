import React, { Component } from 'react'
import InputField from './InputField'

export default class AttributePanel extends Component {

	/** Этот  */
	componentDidMount() {
		// this.timer = setInterval(() => {
		// 	console.log('timer');
		// },
		// 1000)
	}

	componentWillUnmount() {
		// clearInterval(this.timer)
	}

	render() {
		return (
			<div className='attribute_panel'>
				<InputField label='Количество касс' />
				<InputField label='Интервал'/>
				<InputField label='Количество'/>
				<InputField label='Мин. время обслуживания'/>
				<InputField label='Макс. время обслуживания'/>
			</div>
		)
	}
}
