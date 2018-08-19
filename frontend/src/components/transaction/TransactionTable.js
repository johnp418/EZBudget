import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTransactions } from "../../actions/postActions";
import TransactionForm from "./TransactionForm";

class TransactionTable extends Component {
  componentWillMount() {
    this.props.fetchTransactions();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTransaction) {
      this.props.transactions.unshift(nextProps.newTransaction);
    }
  }

  render() {
    const transactions = this.props.transactions.map((transaction, index) => (
      <tr key={index}>
        <td className="date">{transaction.transactionDate}</td>
        <td className="description">{transaction.description}</td>
        <td className="withdrawal">{transaction.withdrawal}</td>
        <td className="deposit">{transaction.deposit}</td>
        <td className="balance">{transaction.runningBalance}</td>
      </tr>
    ));
    return (
      <div>
        <TransactionForm />
        <table id="transactionSummary">
          <thead>
            <tr>
              <th>Transaction Date</th>
              <th>Description</th>
              <th>Withdrawal</th>
              <th>Deposit</th>
              <th>Running Balance</th>
            </tr>
          </thead>
          <tbody>{transactions}</tbody>
        </table>
      </div>
    );
  }
}

TransactionTable.propTypes = {
  fetchTransactions: PropTypes.func.isRequired,
  transactions: PropTypes.array.isRequired,
  newTransaction: PropTypes.object
};

const mapStateToProps = state => ({
  transactions: state.transactions.items,
  newTransaction: state.transactions.item
});

export default connect(
  mapStateToProps,
  { fetchTransactions }
)(TransactionTable);
