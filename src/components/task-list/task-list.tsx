import React, { useContext } from 'react';
import { TodoListContext } from '../../providers/todo-list.provider';
import { ListItem } from '../list-item';
import styles from './task-list.module.scss';

export const TaskList: React.FC = () => {
  const { tasks } = useContext(TodoListContext);

  const sortedTasks = tasks.sort((x, y) => {
    return x.done === y.done ? 0 : x.done ? 1 : -1;
  });

  return (
    <div className={styles.root}>
      {sortedTasks.map((task) => (
        <ListItem key={task.id} task={task} />
      ))}
    </div>
  );
};
