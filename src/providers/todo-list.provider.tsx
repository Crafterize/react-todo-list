import React, { useState } from 'react';
import { Task } from '../types/task.type';
import { v4 as uuid } from 'uuid';

type TodoListContextType = {
  tasks: Task[];
  addTask(task: Omit<Task, 'id'>): void;
  removeTask(id: string): void;
  toggleStatus(id: string): void;
};

const initialData: TodoListContextType = {
  tasks: [
    { done: false, id: uuid(), name: 'Eat pizza!' },
    { done: false, id: uuid(), name: 'Sleep well' },
    { done: true, id: uuid(), name: 'Play more games' },
    { done: true, id: uuid(), name: 'Go for a walk' },
  ],
  addTask: () => null,
  removeTask: () => null,
  toggleStatus: () => null,
};

export const TodoListContext = React.createContext<TodoListContextType>(initialData);

export const TodoListProvider: React.FC = (props) => {
  const [tasks, setTasks] = useState<Task[]>([...initialData.tasks]);

  const addTask = (task: Omit<Task, 'id'>) => {
    setTasks([...tasks, { ...task, id: uuid() }]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((x) => x.id !== id));
  };

  const toggleStatus = (id: string) => {
    const updatedTasks = tasks.map((x) => {
      if (x.id !== id) return x;
      return { ...x, done: !x.done };
    });
    setTasks(updatedTasks);
  };

  const values: TodoListContextType = {
    tasks,
    addTask,
    removeTask,
    toggleStatus,
  };

  return <TodoListContext.Provider value={values}>{props.children}</TodoListContext.Provider>;
};
