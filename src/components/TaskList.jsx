import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <h1>No hay</h1>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}

export default TaskList;
