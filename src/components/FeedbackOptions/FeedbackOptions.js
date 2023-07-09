import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


function FeedbackOptions({ onLeaveFeedback, options }) {
    return (
        <div className={css.wrapper}>
            {options.map(option => (
                <button type="button" className={css.button__options} key={option} name={option} onClick={onLeaveFeedback} >
                    {option}
                </button>
            ))}
        </div>
    );
}


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;