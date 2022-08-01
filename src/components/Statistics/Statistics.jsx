import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled.js';

export const Statistics = ({ options, values, total, positivePercentage }) => {
  return (
    <StatisticsList>
      {options.map(option => (
        <StatisticsItem key={option}>
          {option}:{values[option]}
        </StatisticsItem>
      ))}
      <StatisticsItem>
        Total: <span>{total()}</span>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback: <span>{positivePercentage()}%</span>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
