import React from 'react';
import PropTypes from 'prop-types';
import s from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
