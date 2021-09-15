import React, { useContext, useState } from 'react';
import { TodoListContext } from '../../providers/todo-list.provider';

export const AddTask: React.FC = (props) => {
  const [task, setTask] = useState('');
  const { tasks, setTasks } = useContext(TodoListContext);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    let tasksList = [...tasks];
    tasksList = [...tasksList, task];
    setTasks(tasksList);
    setTask('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="add task" value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
