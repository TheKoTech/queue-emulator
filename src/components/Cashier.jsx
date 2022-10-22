import React, { Component } from "react";
import PropTypes, { number } from "prop-types";

/** Fully controlled component. */
export default class Cashier extends Component {
	static propTypes = {
		numOfCustomers: PropTypes.number,
		minTime: PropTypes.number,
		maxTime: PropTypes.number,
		onMinTimeChange: PropTypes.func,
		onMaxTimeChange: PropTypes.func,
	};

	render() {
		return (
			<div className="cashier">
				<h3>{this.props.title}</h3>
				<div className="param_list">
					<div className="param_box">
						<span className="queue_icon" />
						<span className="param_label">
							{this.props.numOfCustomers}
						</span>
					</div>
					<div className="param_box">
						<span className="time_icon" />
						<span className="param_label">
							{this.props.maxTime}
						</span>
					</div>
				</div>
			</div>
		);
	}
}
