import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.history}>
      <thead>
        <tr>
          <th className={s.thead}>Type</th>
          <th className={s.thead}>Amount</th>
          <th className={s.thead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionHistoryItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
