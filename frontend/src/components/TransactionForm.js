import React, { Component } from 'react'

class TransactionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionDate: '',
            description: '',
            transactionAmount: '',
            transactionType: 'deposit'
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const transaction = {
            transactionDate: this.state.transactionDate,
            description: this.state.description,
            withdrawal: this.state.transactionType === 'withdrawal' ? -this.state.transactionAmount : null,
            deposit: this.state.transactionType === 'deposit' ? this.state.transactionAmount : null,
            runningBalance: 0
        };

    }

    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Date: </label>
                        <br />
                        <input
                            type="date"
                            name="transactionDate"
                            onChange={this.onChange}
                            value={this.state.transactionDate}
                        />
                    </div>
                    <div>
                        <label>Description: </label>
                        <br />
                        <input
                            type="text"
                            name="description"
                            onChange={this.onChange}
                            value={this.state.description}
                        />
                    </div>
                    <div>
                        <label>Amount: </label>
                        <br />
                        <input
                            type="number"
                            name="transactionAmount"
                            onChange={this.onChange}
                            value={this.state.transactionAmount}
                        />
                    </div>
                    <div>
                        <label>Amount: </label>
                        <br />
                        <select name="transactionType" onChange={this.onChange} required>
                            <option value="deposit">Deposit</option>
                            <option value="withdrawal">Withdrawal</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default TransactionForm;