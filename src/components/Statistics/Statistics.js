import React from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem/StaticticsItem';
import s from './Statistics.module.css';

function getRandomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomColor = () => {
  const colorValue = `${getRandomColor(0, 255)},${getRandomColor(
    0,
    255,
  )},${getRandomColor(0, 255)}, 0.8`;

  return {
    backgroundColor: `rgba(${colorValue})`,
  };
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.list}>
        {stats.map(stat => (
          <li key={stat.id} className={s.item} style={randomColor()}>
            <StatisticsItem label={stat.label} percentage={stat.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;
