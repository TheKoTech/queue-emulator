import React, {Component} from 'react'
import Cashier from './Cashier'


function randInt(max) {
    return Math.floor(Math.random() * max)
}


export default class CashierList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timerID: undefined
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (state.timerID !== undefined)
            clearInterval(state.timerID)
        return {
            timerID: setInterval(
                () => CashierList.tick(),
                props.data.customersInterval * 1000
            )
        }
    }

    static tick() {
        console.log('kek')
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        console.log('CashierList.jsx: render()')
        const cashierKeys = []
        for (let i = 0; i < this.props.data.numOfCashiers; i++) {
            cashierKeys.push(i)
        }

        const cashierList = cashierKeys.map((key) =>
            < Cashier
                key={key}
                title={'Cashier ' + (key + 1)}
                // Заглушка
                numOfCustomers={randInt(4)}
                minTime={randInt(4)}
                maxTime={randInt(2) + 3}
            />
        )

        return (
            <div className='cashier_list'>
                {cashierList}
            </div>
        )
    }
}
