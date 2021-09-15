import React from 'react';

export const TodoListContext = React.createContext({});

export const TodoListProvider: React.FC = (props) => {
  return <TodoListContext.Provider value={{}}>{props.children}</TodoListContext.Provider>;
};
