import PropTypes from 'prop-types';
import {
  StatisticList,
  StatisticItem,
  StatisticInfo,
} from './Statistic.styled';

export const Statistic = ({ feedbackData, totalFeedback, positiveFeedback }) => {
  return (
      <StatisticList>
        {Object.keys(feedbackData).map(item => (
          <StatisticItem key={item}>
            <StatisticInfo>
              {item}: {feedbackData[item]}
            </StatisticInfo>
          </StatisticItem>
        ))}
        <StatisticItem>
          <StatisticInfo>Total: {totalFeedback()}</StatisticInfo>
        </StatisticItem>
        <StatisticItem>
          <StatisticInfo>Positive: {positiveFeedback()}</StatisticInfo>
        </StatisticItem>
      </StatisticList>
  );
};

Statistic.propTypes = {
  feedbackData: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
