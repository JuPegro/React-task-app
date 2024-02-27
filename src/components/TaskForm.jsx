import React, { useState } from "react";

const TaskForm = ({ createTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("")
    setDescription("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="writer u title..."
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="writer u task"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Save</button>
    </form>
  );
};

export default TaskForm;
