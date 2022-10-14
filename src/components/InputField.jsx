import React, { Component } from 'react'


export default class InputField extends Component {

	constructor(props) {
		super(props)
		this.state = { value: 1 }
	}

	updateValue(e) {
		if (e.target.validity.valid) {
			this.setState({ value: +e.target.value })
		}
	}

	componentDidUpdate() {
		console.log(this.state.value);
	}

	render() {
		return (
			<div className='input_field_container'>
				<label>
					{this.props.label}
				</label>
				<input
					type="text"
					className='input_field'
					pattern='\d{1,3}'
					onChange={(e) => this.updateValue(e)} />
			</div>
		)
	}
}
