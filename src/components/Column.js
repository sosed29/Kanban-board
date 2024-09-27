import React, { useState } from 'react';
import Card from './Card';
import Dropdown from './Dropdown';
import { moveTask, getTasksForDropdown } from './utils';

const Column = ({ column, columns, setColumns }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      const newTask = { id: Date.now().toString(), name: newTaskName };
      const updatedColumn = {
        ...column,
        issues: [...column.issues, newTask],
      };

      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.title === column.title ? updatedColumn : col
        )
      );

      setNewTaskName('');
      setIsAdding(false);
    }
  };

  const handleSelectTask = (taskId) => {
    const task = column.issues.find((issue) => issue.id === taskId);
    if (task) {
      setSelectedTask(task);
    }
  };

  const handleMoveTask = (taskId) => {
    const sourceColumnTitle = getSourceColumnTitle(column.title);
    const taskToMove = columns
      .find((col) => col.title === sourceColumnTitle)
      .issues.find((task) => task.id === taskId);

    if (taskToMove) {
      setColumns((prevColumns) => {
        const updatedColumns = moveTask(
          prevColumns,
          sourceColumnTitle,
          column.title,
          taskToMove
        );
        return updatedColumns;
      });
      setSelectedTask(null);
    }
  };

  const isBacklogEmpty = columns.find((col) => col.title === 'Backlog').issues.length === 0;
  const isReadyEmpty = columns.find((col) => col.title === 'Ready').issues.length === 0;
  const isInProgressEmpty = columns.find((col) => col.title === 'In Progress').issues.length === 0;

  const tasksForDropdown = getTasksForDropdown(columns, column);
  const isDropdownVisible = tasksForDropdown.length > 0;

  const isAddCardDisabled = (column.title === 'Backlog' && isBacklogEmpty) ||
                            (column.title === 'Ready' && isReadyEmpty) ||
                            (column.title === 'In Progress' && isInProgressEmpty) ||
                            (column.title === 'Finished' && isInProgressEmpty);

  return (
    <div className="column">
      <h2>{column.title}</h2>
      <div className="task-list">
        {column.issues.map((issue) => (
          <Card
            key={issue.id}
            issue={issue}
            handleSelectTask={handleSelectTask}
            selectedTask={selectedTask}
          />
        ))}
      </div>
      {isAdding ? (
        <div className="add-task">
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder=""
          />
          <button className="add-task-button" onClick={handleAddTask}>
            Submit
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            if (
              (column.title === 'Backlog' && !isBacklogEmpty) ||
              (column.title === 'Ready' && !isBacklogEmpty) ||
              (column.title === 'In Progress' && !isInProgressEmpty) ||
              (column.title === 'Finished' && !isInProgressEmpty)
            ) {
              setIsAdding(true);
            }
          }}
          disabled={isAddCardDisabled}
          className={isAddCardDisabled ? 'disabled' : ''}
        >
          + Add card
        </button>
      )}
      {(column.title === 'In Progress' || column.title === 'Finished' || column.title === 'Ready') && (
        <div className="move-task">
          {isDropdownVisible && (
            <Dropdown
              tasks={tasksForDropdown}
              handleSelectTask={handleSelectTask}
              onMoveTask={handleMoveTask}
            />
          )}
        </div>
      )}
    </div>
  );
};

// функция для определения исходной колонки
const getSourceColumnTitle = (currentTitle) => {
  switch (currentTitle) {
    case 'Ready':
      return 'Backlog';
    case 'In Progress':
      return 'Ready';
    case 'Finished':
      return 'In Progress';
    default:
      return null;
  }
};

export default Column;
