import React, { useState } from 'react';
import userAvatar from './user-avatar.svg'; // Замените на правильный путь к аватарке

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="user-menu" onClick={toggleMenu}>
      <img src={userAvatar} alt="User Avatar" className="user-avatar" />
      <div className={`arrow ${isOpen ? 'up' : 'down'}`} />
      {isOpen && (
        <div className="menu-items open">
          <div className="menu-item">Profile</div>
          <div className="menu-item">Log Out</div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
