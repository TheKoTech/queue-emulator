import React from 'react'
import PropTypes from 'prop-types'

function InputField(props) {
	return (
		<div className='input_field'>
			<label>
				{props.label}
			</label>
			<input
				type="text"
				id={props.id}
				pattern='\d{1,3}'
				value={props.value}
				onChange={(e) => props.onChange(e)}
				required
			/>
		</div>
	)
}

InputField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.number,
	onChange: PropTypes.func
}

export default InputField
