import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistic } from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#6F4E37',
        fontWeight: 'bolder',
      }}
    >
      Please leave feedback
      <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.updateState}
      />
    </div>
  );
};
