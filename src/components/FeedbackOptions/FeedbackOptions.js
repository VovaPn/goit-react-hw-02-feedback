import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      className={styles.btn}
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
