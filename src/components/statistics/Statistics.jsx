import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={styles.green}>Good: {good}</p>
      <p className={styles.yellow}>Neutral: {neutral}</p>
      <p className={styles.red}>Bad: {bad}</p>
      <p className={styles.blue}>Total: {total}</p>
      <p className={styles.blue}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
