import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ issue }) => {
  return (
    <div className="card">
      <Link to={`/tasks/${issue.id}`} className="card-link">
        {issue.name}
      </Link>
    </div>
  );
};


export default Card;
