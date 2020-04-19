import React, { memo } from 'react';
import styles from './styles.module.css';

const Title = ({ title }) => (
  <h1 className={styles.title}>{title}</h1>
);

export default memo(Title);