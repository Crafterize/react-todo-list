import React, { useContext, useState } from 'react';
import styles from './list-item.module.scss';
import { TodoListContext } from '../../providers/todo-list.provider';

type PropsType = {
  taskName: string;
};

export const ListItem: React.FC<PropsType> = (props) => {
  const [value, setValue] = useState(props.taskName);
  const { tasks, setTasks } = useContext(TodoListContext);

  const handleDelete = (id: string) => {
    // let tasksArr = [...tasks];
    // tasksArr = tasksArr.filter(task=>task.id !== id)
    // setTasks(tasks)
  };

  const changeStatus = (id: string) => {
    // const tasksArr = [...tasks];
    // tasksArr.forEach(task=> {
    //     if(task.id === id) {
    //         task.done = true;
    //     }
    // })
    // setTasks(tasks)
  };

  return (
    <div className={styles.root}>
      <button onClick={() => changeStatus('1')}>check</button>
      <input
        className={styles.description}
        type="text"
        placeholder="task description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleDelete('1')} className={styles.deleteButton}>
        x
      </button>
    </div>
  );
};
