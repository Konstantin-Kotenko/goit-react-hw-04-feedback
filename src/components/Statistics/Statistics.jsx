import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled.js';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        Good: <span>{good}</span>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <span>{neutral}</span>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <span>{bad}</span>
      </StatisticsItem>
      <StatisticsItem>
        Total: <span>{total}</span>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback: <span>{positivePercentage}%</span>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
