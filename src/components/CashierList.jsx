import React, { Component } from 'react'
import Cashier from './Cashier'

/**  */
export default class CashierList extends Component {

	/** заготовка на будущее - приложение будет обновляться каждую секунду. в this.state нужно будет хранить количество текущих клиентов,
	 * а также время до прихода новых timeTillNextClients. В таймере это время будет убавляться на 1, и если оно равно 0, то присвоить новое.
	 */
	componentDidMount() {
		// this.timer = setInterval(
		// 	() => {
		// 		// this.setState();
		// 	},
		// 	1000)
	}

	componentWillUnmount() {
		// clearInterval(this.timer)
	}

	render() {

		const cashierKeys = []
		for (let i = 0; i < this.props.data.numOfCashiers; i++) {
			cashierKeys.push(i)
		}

		const cashierList = cashierKeys.map((key) =>
			<Cashier key={key} />
		)

		return (
			<ul>
				{cashierList}
			</ul>
		)
	}
}

