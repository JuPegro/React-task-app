import React, { useState, useEffect } from "react"
import { data } from "./data"

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data)
  }, []);

  if (tasks.length === 0) {
    return <h1>No hay</h1>
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className="">
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </>
  )
}

export default TaskList;
