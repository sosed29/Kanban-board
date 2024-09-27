import React from 'react';
import UserMenu from './UserMenu';

const Header = () => {
  return (
    <div className="header">
      <h1>Awesome Kanban Board</h1>
      <UserMenu />
    </div>
  );
};

export default Header;