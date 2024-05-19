import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import userIcon from '../images/user-icon.png';
import philantrolinkLogo from '../images/philantrolink-logo.png';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation hook

  const goToDashboard = () => {
    navigate('/');
  };

  const goToAccountManagement = () => {
    navigate('/account-management');
  };

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
            <p className="user-desc">Test User</p>
          </div>
        </div>
      </header>
      <div className="sidebar-dashboard">
        <div className="sidebar-content">
          <img src={philantrolinkLogo} alt="Philantrolink Logo" className="sidebar-logo" />
          <h1 className="sidebar-title">Philantrolink</h1>
        </div>
        <div className="sidebar-buttons">
          <button
            className={`sidebar-button ${location.pathname === '/' ? 'active' : ''}`}
            onClick={goToDashboard}
          >
            Dashboard
          </button>
          <button
            className={`sidebar-button ${location.pathname === '/account-management' ? 'active' : ''}`}
            onClick={goToAccountManagement}
          >
            Account Management
          </button>
          <button className="sidebar-button">Event Manager</button>
          <button className="sidebar-button">Transactions</button>
        </div>
      </div>
      <div className="content-dashboard">
        <h1>Philantrolink Status</h1>
        <p>This is the main content of the dashboard.</p>
      </div>
    </div>
  );
}

export default Dashboard;
