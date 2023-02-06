import React, {Component} from 'react';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistic } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = itemName => {
    this.setState(prevState => ({ [itemName]: prevState[itemName] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good ? Math.round((good * 100) / this.countTotalFeedback()) + '%' : '0%';
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            feedbackData={this.state}
            handleIncrement={this.handleIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistic
              feedbackData={this.state}
              totalFeedback={this.countTotalFeedback}
              positiveFeedback={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
