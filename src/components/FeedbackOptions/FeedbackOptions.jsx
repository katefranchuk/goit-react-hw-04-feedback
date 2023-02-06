import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';
import {
  FeedbackOptionsContainer,
  FeedbackOptionsItem,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ feedbackData, handleIncrement }) => {
  return (
    <FeedbackOptionsContainer>
      {Object.keys(feedbackData).map(item => (
        <FeedbackOptionsItem key={item}>
          <Button handleIncrementFunction={handleIncrement}>{item}</Button>
        </FeedbackOptionsItem>
      ))}
    </FeedbackOptionsContainer>
  );
};

FeedbackOptions.propTypes = {
  feedbackData: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  handleIncrement: PropTypes.func,
};
