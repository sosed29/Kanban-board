export const moveTask = (prevColumns, sourceColumnTitle, destinationColumnTitle, selectedTask) => {
  return prevColumns.map((col) => {
    if (col.title === sourceColumnTitle) {
      return {
        ...col,
        issues: col.issues.filter((issue) => issue.id !== selectedTask.id),
      };
    } else if (col.title === destinationColumnTitle) {
      return {
        ...col,
        issues: [...col.issues, selectedTask],
      };
    } else {
      return col;
    }
  });
};

export const getTasksForDropdown = (columns, currentColumn) => {
  const columnTitles = {
    'Ready': 'Backlog',
    'In Progress': 'Ready',
    'Finished': 'In Progress',
  };
  const sourceColumn = columns.find((col) => col.title === columnTitles[currentColumn.title]);
  return sourceColumn ? sourceColumn.issues : [];
};
