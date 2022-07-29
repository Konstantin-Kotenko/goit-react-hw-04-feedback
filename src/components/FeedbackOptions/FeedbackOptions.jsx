import PropTypes from 'prop-types';
import { Button, FeedbackDiv } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackDiv>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          id={option}
        >
          {option}
        </Button>
      ))}
    </FeedbackDiv>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
