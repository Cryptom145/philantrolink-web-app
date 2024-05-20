import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import userIcon from '../images/user-icon.png';
import philantrolinkLogo from '../images/philantrolink-logo.png';

function Settings() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('profile');
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/');
  };

  const goToAccountManagement = () => {
    navigate('/account-management');
  };

  const goToEventManager = () => {
    navigate('/event-manager');
  };

  const goToTransactions = () => {
    navigate('/transactions');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  const goToSettings = () => {
    navigate('/settings');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <div>Edit Profile content goes here.</div>;
      case 'chats':
        return <div>Chats content goes here.</div>;
      case 'helpSupport':
        return <div>Help & Support content goes here.</div>;
      default:
        return <div>Select an option from the settings menu.</div>;
    }
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
          <button
            className={`sidebar-button ${location.pathname === '/event-manager' ? 'active' : ''}`}
            onClick={goToEventManager}
          >
            Event Manager
          </button>
          <button
            className={`sidebar-button ${location.pathname === '/transactions' ? 'active' : ''}`}
            onClick={goToTransactions}
          >
            Transactions
          </button>
        </div>
        <div className="sidebar-bottom-buttons">
          <button
            className={`sidebar-button ${location.pathname === '/profile' ? 'active' : ''}`}
            onClick={goToProfile}
          >
            Profile
          </button>
          <button
            className={`sidebar-button ${location.pathname === '/settings' ? 'active' : ''}`}
            onClick={goToSettings}
          >
            Settings
          </button>
        </div>
      </div>
      <div className="content-dashboard">
        <h1 className="content-title">Settings</h1>
        <div className="settings-buttons">
          <button
            className={`settings-button ${activeSection === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveSection('profile')}
          >
            Edit Profile
          </button>
          <button
            className={`settings-button ${activeSection === 'chats' ? 'active' : ''}`}
            onClick={() => setActiveSection('chats')}
          >
            Chats
          </button>
          <button
            className={`settings-button ${activeSection === 'helpSupport' ? 'active' : ''}`}
            onClick={() => setActiveSection('helpSupport')}
          >
            Help & Support
          </button>
        </div>
        <div className="settings-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Settings;
