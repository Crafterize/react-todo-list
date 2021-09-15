import React, { useContext } from 'react';
import { TodoListContext } from '../../providers/todo-list.provider';
import { ListItem } from '../list-item';
import styles from './task-list.module.scss';

export const TaskList: React.FC = (props) => {
  const { tasks } = useContext(TodoListContext);

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <ListItem key={task} taskName={task} />
      ))}
    </div>
  );
};
