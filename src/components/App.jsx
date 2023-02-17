import React, { useState } from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = itemName => {
    setState(prevState => ({
      ...prevState,
      [itemName]: prevState[itemName] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return good ? Math.round((good * 100) / countTotalFeedback()) + '%' : '0%';
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          feedbackData={state}
          handleIncrement={handleIncrement}
        />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistic
            feedbackData={state}
            totalFeedback={countTotalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
};
