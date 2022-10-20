import React, { Component } from 'react'


export default class InputField extends Component {

	render() {

		const value = this.props.defaultValue

		return (
			<div className='input_field'>
				<label>
					{this.props.label}
				</label>
				<input
					type="text"
					id={this.props.id}
					pattern='\d{1,3}'
					defaultValue={value}
					onChange={(e) => this.props.onChange(e)}
					required
				/>
			</div>
		)
	}
}
