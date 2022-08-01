import { useState } from 'react';
import { Box } from './components/Box';
import { Statistics } from './components/Statistics';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Section } from './components/Section';
import { Notification } from './components/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const options = Object.keys(feedback);

  const onLeaveFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const countTotalFeedback = () =>
    Object.values(feedback).reduce((value, acc) => acc + value, 0);

  const countPositiveFeedbackPercentage = () =>
    Math.round((feedback.good / countTotalFeedback()) * 100);

  return (
    <Box>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>

      {countTotalFeedback() <= 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            options={options}
            values={feedback}
            total={() => countTotalFeedback()}
            positivePercentage={() => countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </Box>
  );
};
