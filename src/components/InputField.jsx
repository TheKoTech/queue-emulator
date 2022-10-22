import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class InputField extends Component {

	static propTypes = {
		id: PropTypes.string,
		label: PropTypes.string,
		defaultValue: PropTypes.number,
		onChange: PropTypes.func
	}

	render() {
		return (
			<div className='input_field'>
				<label>
					{this.props.label}
				</label>
				<input
					type="text"
					id={this.props.id}
					pattern='\d{1,3}'
					defaultValue={this.props.defaultValue}
					onChange={(e) => this.props.onChange(e)}
					required
				/>
			</div>
		)
	}
}
