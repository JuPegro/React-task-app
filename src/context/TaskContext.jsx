import { tasks as data } from "../data/data";
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);


  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((x) => x.id !== task.id));
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask}
    }
    
    
    >
      {props.children}
    </TaskContext.Provider>
  );
};
