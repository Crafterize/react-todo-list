import React, { useState } from 'react';
import styles from './list-item.module.scss';

type PropsType = {
  taskName: string;
};

export const ListItem: React.FC<PropsType> = (props) => {
  const [value, setValue] = useState(props.taskName);

  return (
    <div className={styles.root}>
      <button>check</button>
      <input
        className={styles.description}
        type="text"
        placeholder="task description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className={styles.deleteButton}>x</button>
    </div>
  );
};
