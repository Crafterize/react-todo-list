import React, { useState } from 'react';

type TodoListContextType = {
  tasks: string[];
  setTasks(task: string[]): void;
};

const initialdata: TodoListContextType = {
  tasks: [],
  setTasks: () => null,
};

export const TodoListContext = React.createContext<TodoListContextType>(initialdata);

export const TodoListProvider: React.FC = (props) => {
  const [tasks, setTasks] = useState(initialdata.tasks);

  const values: TodoListContextType = {
    tasks,
    setTasks,
  };

  return <TodoListContext.Provider value={values}>{props.children}</TodoListContext.Provider>;
};
