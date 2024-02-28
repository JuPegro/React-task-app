import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">You have no added tasks</h1>;
  }

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-5 md:grid-cols-2 content-start gap-4 h-full sm:w-11/12 w-full">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
