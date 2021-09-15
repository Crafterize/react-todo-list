import React from 'react';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <h1>Todo list</h1>
    </header>
  );
};
