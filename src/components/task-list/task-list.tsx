import React, { useContext } from 'react';
import { TodoListContext } from '../../providers/todo-list.provider';
import { ListItem } from '../list-item';

export const TaskList: React.FC = (props) => {
  const { tasks } = useContext(TodoListContext);

  return (
    <div>
      {tasks.map((task) => (
        <ListItem key={task} taskName={task} />
      ))}
    </div>
  );
};
