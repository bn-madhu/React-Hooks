import React from 'react';
import { Link } from 'react-router-dom';
import UseStateHook from './useState/UseState';

const Header: React.FC = () => {
  return (
    <div className="nav-container">
    <div className="nav-content">
      <h1 className='logo'>Hooks</h1>
      <div className="flex items-center" style={{gap: '8px'}}>
        <div className="nav-item"><a href="/">Home</a></div>
        <div className="nav-item"><a href="/usestate">useState counter</a></div>
        <div className="nav-item">Contact</div>
        <div className="nav-item">Business partners</div>
        <div className="nav-item">Sign in</div>
      </div>
    </div>
  </div>
  );
};

export default Header;