import React, { useCallback, useContext, useState } from 'react';
import styles from './list-item.module.scss';
import { TodoListContext } from '../../providers/todo-list.provider';
import { Task } from '../../types/task.type';
import clsx from 'clsx';

type PropsType = {
  task: Task;
};

export const ListItem: React.FC<PropsType> = (props) => {
  const [value, setValue] = useState(props.task.name);
  const { removeTask, toggleStatus } = useContext(TodoListContext);

  const handleDelete = useCallback(() => {
    removeTask(props.task.id);
  }, [props.task, removeTask]);

  const changeStatus = useCallback(() => {
    toggleStatus(props.task.id);
  }, [props.task, toggleStatus]);

  return (
    <div className={clsx(styles.root, { [styles.done]: props.task.done })}>
      <input type="checkbox" checked={props.task.done} onChange={changeStatus} />
      <input
        className={styles.description}
        type="text"
        disabled={props.task.done}
        placeholder="task description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {!props.task.done && (
        <button onClick={handleDelete} className={styles.deleteButton}>
          remove
        </button>
      )}
    </div>
  );
};
