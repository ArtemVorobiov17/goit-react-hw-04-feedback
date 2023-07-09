//import { render } from "@testing-library/react";
import Section from "components/Section/Section";
import React, { Component } from "react";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notification/Notification";
import css from './App.module.css'



export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


    onLeaveFeedback = event => {
        const score = event.target.name;
        this.setState(state => ({ [score]: state[score] + 1 }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const percent = Math.round((good / this.countTotalFeedback()) * 100);
        return percent;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const options = ['good', 'neutral', 'bad'];
        return (
            <div className={css.container}>
                <Section title="Please Leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={options} />
                </Section>

                <Section title="Statistics">
                    {this.countTotalFeedback() > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            totalFeedback={this.countTotalFeedback()}
                            positiveFeedback={this.countPositiveFeedbackPercentage()}
                        ></Statistics>
                    ) : (<Notification message={'There is no feedback'} />
                    )}
                </Section>
            </div>
        );
    }
}
