import React from 'react';
import PropTypes from 'prop-types';
import s from './StatisticsItem.module.css';

const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
