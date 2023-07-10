//import { render } from "@testing-library/react";
import Section from "components/Section/Section";
import { useState } from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification";
import css from './App.module.css'



const App = () => {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = evt => {
    const { name } = evt.target;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

    const countTotalFeedback = () => {        
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const percent = Math.round((good / countTotalFeedback()) * 100);
        return percent;
    };

    
    const options = ['good', 'neutral', 'bad'];
    return (
        <div className={css.container}>
            <Section title="Please Leave feedback">
                <FeedbackOptions onLeaveFeedback={onLeaveFeedback}
                    options={options}
                />
            </Section>

            <Section title="Statistics">
                {countTotalFeedback() > 0 ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        totalFeedback={countTotalFeedback()}
                        positiveFeedback={countPositiveFeedbackPercentage()}
                    ></Statistics>
                ) : (<Notification message={'There is no feedback'} />
                )}
            </Section>
        </div>
    );    
}


export default App;
