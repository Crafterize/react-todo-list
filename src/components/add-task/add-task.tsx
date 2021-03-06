import React, { useContext, useRef } from 'react';
import { TodoListContext } from '../../providers/todo-list.provider';
import styles from './add-task.module.scss';

export const AddTask: React.FC = () => {
  const input = useRef<HTMLInputElement>(null);
  const { addTask } = useContext(TodoListContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (input.current?.value) {
      addTask({
        name: input.current.value,
        done: false,
      });
      input.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.root}>
      <input ref={input} type="text" placeholder="add task" />
      <button type="submit">Add</button>
    </form>
  );
};
