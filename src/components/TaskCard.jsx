import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({task}) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="flex flex-col max-h-44 min-w-14 overflow-hidden items-start w-full p-5 gap-2 rounded-md bg-white outline outline-1 outline-slate-300 shadow-slate-400 shadow">
      <h1 className=" font-bold text-xl text-zinc-800 tracking-wide">{task.title}</h1>
      <p className=" font-medium text-xs text-zinc-500">{task.description}</p>
      <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600" onClick={() => deleteTask(task)}>Delete</button>
    </div>
  );
};

export default TaskCard;
