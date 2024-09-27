import React from 'react';

const Footer = ({ columns = [] }) => {
  // Найдём колонки Backlog и Finished
  const backlogColumn = columns.find((col) => col.title === 'Backlog');
  const finishedColumn = columns.find((col) => col.title === 'Finished');

  // Получим количество задач в каждой из колонок
  const activeTasksCount = backlogColumn ? backlogColumn.issues.length : 0;
  const finishedTasksCount = finishedColumn ? finishedColumn.issues.length : 0;

  return (
    <footer className="footer">
      <p>Active tasks: {activeTasksCount}</p>
      <p>Finished tasks: {finishedTasksCount}</p>
    </footer>
  );
};

export default Footer;
