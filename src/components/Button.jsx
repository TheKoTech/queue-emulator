import React from 'react'


function Button(props) {
	return (
		<button
			id={props.id}
			className={'button' + (props.className !== undefined ? ' ' + props.className : '')}
			onClick={(e) => props.onClick(e)}
		>
			{props.label}
		</button>
	)
}

export default Button
