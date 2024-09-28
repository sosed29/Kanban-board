import React from 'react';
const Dropdown = ({ tasks, handleSelectTask, onMoveTask, selectedTaskId }) => {
  const handleChange = (e) => {
    const selectedTaskId = e.target.value;
    handleSelectTask(selectedTaskId);
    if (selectedTaskId) {
      onMoveTask(selectedTaskId);
    }
  };

  return (
    <select className="task-dropdown" onChange={handleChange}>
      <option value=""></option>
      {tasks.map((task) => (
        <option key={task.id} value={task.id}>
          {task.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown