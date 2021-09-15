import React, { useState } from 'react';
import styles from './list-item.module.scss';

export const ListItem: React.FC = (props) => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.root}>
      <button>check</button>
      <input type="text" placeholder="task description" value={value} onChange={(e) => setValue(e.target.value)} />
      <button>delete</button>
    </div>
  );
};
