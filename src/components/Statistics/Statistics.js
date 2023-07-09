import PropTypes from 'prop-types';
import css from './Statistics.module.css';


function Statistics({ good, neutral, bad, totalFeedback, positiveFeedback }) {
    return (
        <ul className={css.list__feedback}>
            <li className={css.item__feedback}>
                Good: <span>{good}</span>
            </li>
            <li className={css.item__feedback}>
                Neutral: <span>{neutral}</span>
            </li>
            <li className={css.item__feedback}>
                Bad: <span>{bad}</span>
            </li>
            <li className={css.item__feedback}>
                Total: <span>{totalFeedback}</span>
            </li>
            <li className={css.item__feedback}>
                Positive Feedback: <span>{positiveFeedback}%</span>
            </li>
        </ul>
    );
}


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};


export default Statistics;