import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import './App.css';
import Board from './components/Board';
import TaskDetail from './components/TaskDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import mockData from './components/mockData';

function App() {
  const [columns, setColumns] = useState(() => {
    const savedColumns = JSON.parse(localStorage.getItem('columns'));
    return savedColumns || mockData;
  });

  useEffect(() => {
    // сохраняем колонки в localStorage при каждом изменении
    localStorage.setItem('columns', JSON.stringify(columns));
  }, [columns]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Board columns={columns} setColumns={setColumns} />
          <Routes>
            <Route path="/tasks/:id" element={<TaskDetailWrapper />} />
          </Routes>
        </div>
        <Footer columns={columns} />
      </div>
    </Router>
  );
}

function TaskDetailWrapper() {
  const { id } = useParams();

  return (
    <div className={`task-detail-wrapper ${id ? 'visible' : ''}`}>
      <TaskDetail taskId={id} />
    </div>
  );
}

export default App;
