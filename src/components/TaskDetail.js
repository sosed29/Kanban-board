import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [task, setTask] = useState(null);
  const [description, setDescription] = useState("This task has no description");

  useEffect(() => {
    const columns = JSON.parse(localStorage.getItem('columns')) || [];
    const foundTask = columns.flatMap(col => col.issues).find(issue => issue.id === id);
    if (foundTask) {
      setTask(foundTask);
      setDescription(foundTask.description || "This task has no description");
    }
  }, [id]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSave = () => {
    const columns = JSON.parse(localStorage.getItem('columns')) || [];
    const updatedColumns = columns.map(col => {
      return {
        ...col,
        issues: col.issues.map(issue => {
          if (issue.id === id) {
            return { ...issue, description };
          }
          return issue;
        })
      };
    });
    localStorage.setItem('columns', JSON.stringify(updatedColumns));
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="task-detail">
      <div className="close-button" onClick={handleClose}>Х</div>
      <h2>{task ? task.name : "Task Not Found"}</h2>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        rows="10"
        cols="30"
      />
      <button onClick={handleSave}>Save Description</button>
    </div>
  );
};

export default TaskDetail;
