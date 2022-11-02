import React from 'react'

export default function CashierParam(props) {
	return (
		<div className="param_box">
			<span className={props.iconClass} />
			<span className="param_label">
				{props.value}
			</span>
		</div>
	)
}
