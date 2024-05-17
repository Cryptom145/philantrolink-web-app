import React from 'react';
import userIcon from '../images/user-icon.png';

function Dashboard() {
  return (
    <div className="app-wrapper-dashboard">
      <header className="app-header-dashboard">
        <div className="header-content">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <div className="user-info">
            <img src={userIcon} alt="User Icon" className="user-icon" />
            <p className ="user-desc">Test User</p>
          </div>
        </div>
      </header>
      <div className="sidebar-dashboard">
        <h1>Sidebar</h1>
        {/* Sidebar content goes here */}
      </div>
      <div className="content-dashboard">
        <h1>Philantrolink Status</h1>
        {/* Main content of the dashboard */}
        <p>This is the main content of the dashboard.</p>
      </div>
    </div>
  );
}

export default Dashboard;
