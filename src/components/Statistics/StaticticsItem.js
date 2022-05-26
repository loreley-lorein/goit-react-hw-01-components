import React from 'react';
import PropTypes from 'prop-types';

// function getRandomColor(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomColor = () => {
//   const colorValue = `${getRandomColor(0, 255)},${getRandomColor(
//     0,
//     255,
//   )},${getRandomColor(0, 255)}, 0.4`;

//   return {
//     backgroundColor: `rgba(${colorValue})`,
//   };
// };

const StatisticsItem = ({ label, percentage }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
