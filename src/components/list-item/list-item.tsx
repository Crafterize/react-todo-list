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
      <input type="text" placeholder="task description" value={value} onChange={(e) => setValue(e.target.value)} />
      <button>delete</button>
    </div>
  );
};
