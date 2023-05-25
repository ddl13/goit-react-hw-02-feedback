import styles from './FeedbackOptions.module.css';
import Notification from 'components/notofication/Notification';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <div className={styles.wrapper}>
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
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
