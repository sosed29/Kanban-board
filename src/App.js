import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Routes>
          <Route path="/tasks/:id" element={<TaskDetail />} />
          <Route path="/" element={<Board columns={columns} setColumns={setColumns} />} />
        </Routes>
        {}
        <Footer columns={columns} />
      </div>
    </Router>
  );
}

export default App;
