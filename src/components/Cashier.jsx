import React from 'react'
import PropTypes from 'prop-types'


function Cashier(props) {
	return (
		<div className="cashier">
			<h3>{props.title}</h3>
			<div className="param_list">
				<div className="param_box">
					<span className="queue_icon" />
					<span className="param_label">
						{props.numOfCustomers}
					</span>
				</div>
				<div className="param_box">
					<span className="time_icon" />
					<span className="param_label">
						{props.maxTime}
					</span>
				</div>
			</div>
		</div>
	)
}

Cashier.propTypes = {
	numOfCustomers: PropTypes.number,
	minTime: PropTypes.number,
	maxTime: PropTypes.number,
	onMinTimeChange: PropTypes.func,
	onMaxTimeChange: PropTypes.func,
}

export default Cashier