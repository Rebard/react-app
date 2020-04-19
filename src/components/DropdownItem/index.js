import React, { memo, useCallback, useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const DropdownItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = useCallback(() => {
    setIsOpen(state => !state);
  }, [setIsOpen]);

  return (
    <div className={styles.dropdownItem}>
      <div className={styles.item} onClick={toggleIsOpen}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.arrow}>
          {isOpen ? <UpOutlined/> : <DownOutlined/>}
        </span>
      </div>
      {isOpen && (
        <div className={styles.content}>{content}</div>
      )}
    </div>
  )
};
DropdownItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default memo(DropdownItem)