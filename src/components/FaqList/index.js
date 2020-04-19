import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DropdownItem from 'components/DropdownItem';
import styles from './styles.module.css';

const FaqList = ({ list }) => {
  if (!list.length) return <h3>No questions yet.</h3>
  return (
    <div className={styles.faq}>
      {list.map(item => (
        <DropdownItem
          key={item.id}
          title={item.question}
          content={item.answer}
        />
      ))}
    </div>
  )
};

FaqList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired
}

export default memo(FaqList);