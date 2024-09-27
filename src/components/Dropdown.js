import React from 'react';

const Dropdown = ({ tasks, handleSelectTask, onMoveTask }) => {
  const handleChange = (e) => {
    const selectedTaskId = e.target.value;
    handleSelectTask(selectedTaskId);
    if (selectedTaskId) {
      onMoveTask(selectedTaskId); // Передаем ID выбранной задачи для перемещения
    }
  };

  return (
    <select onChange={handleChange}>
      <option value=""></option>
      {tasks.map((task) => (
        <option key={task.id} value={task.id}>
          {task.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
