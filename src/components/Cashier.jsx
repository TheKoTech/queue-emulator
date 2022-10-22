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
						<span className="queue_label">
							{this.props.numOfCustomers}
						</span>
					</div>
					<div className="param_box">
						<span className="time_icon" />
						<input
							className="time_input" id="minTime"
							defaultValue={this.props.minTime}
							type="number"
							min={0}
							max={99} />
						<input
							className="time_input"
							id="maxTime"
							defaultValue={this.props.maxTime}
							type="number"
							min={0}
							max={99} />
					</div>
				</div>
			</div>
		);
	}
}
