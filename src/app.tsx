import React from 'react';
import { Header } from './components/header';
import { TodoListProvider } from './providers/todo-list.provider';
import { TaskList } from './components/task-list';
import { AddTask } from './components/add-task';

export const App: React.FC = () => {
  return (
    <TodoListProvider>
      <div className="App">
        <Header />
        <AddTask />
        <main>
          <TaskList />
        </main>
      </div>
    </TodoListProvider>
  );
};
