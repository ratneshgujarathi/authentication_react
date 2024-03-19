import React, { ReactNode } from 'react';


const Navbar: React.FC = () => {
  return (
    <div className="navbar-fixed dflex">
      <div className="box nav-right">
        <div className="nav img-logo"></div>
        <div className="nav menu-items">
          <ul className="nav menu-list">
            <li className="nav menu-item">Home</li>
            <li className="nav menu-item">About</li>
            <li className="nav menu-item">Services</li>
            <li className="nav menu-item">Blog</li>
          </ul>
        </div>
      </div>
      <div className="box nav-left">
        <div className="nav theme-button"></div>
        <div className="nav button-primary"></div>
      </div>
      <div className="box toggle-button"></div>
    </div>
  );
};

export default Navbar;