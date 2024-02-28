import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      className="flex flex-col items-center gap-3 w-4/12 bg-white py-6 rounded-md outline outline-1 outline-slate-300 shadow-slate-400 shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        New Task
      </h2>
      <div className="w-10/12">
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Title
        </label>
        <div className="mt-2">
          <input
            type="text"
            placeholder="Make dinner"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="w-10/12">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>
        </div>
        <div className="mt-2">
          <textarea
            type="text"
            placeholder="You must achieve the calorie goal..."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            autoFocus
            required
            className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="w-10/12">
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  focus-visible:outline-indigo-600"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

{
  /*<form
      className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
      onSubmit={handleSubmit}
    >
      <input
        className="outline-none w-10/12 rounded-md p-3"
        type="text"
        placeholder="writer u title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        className="outline-none w-10/12 rounded-md p-3"
        placeholder="writer u task"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Save</button>
  </form>*/
}
