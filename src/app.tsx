import React from 'react';
import { Header } from './components/header';
import { TodoListProvider } from './providers/todo-list.provider';

export const App: React.FC = () => {
  return (
    <TodoListProvider>
      <div className="App">
        <Header />
        <main></main>
      </div>
    </TodoListProvider>
  );
};
