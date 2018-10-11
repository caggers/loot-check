import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/action_bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const { bitcoin } = this.props;

    if(Object.keys(bitcoin).length === 0) return '';

    return this.props.balance / parseInt(bitcoin.bpi.EUR.rate.replace(',', ''), 10);
  }

  render() {
    return (
      <div>
        <h3>Bitcoin Balance: <span className="bitcoin-amount">{this.computeBitcoin()}</span></h3>
      </div>
    );
  }
}

export default connect(
  state => state,
  { fetchBitcoin }
)(Loot);
