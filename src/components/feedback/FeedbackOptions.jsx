import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            className={styles.button}
            type="button"
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
