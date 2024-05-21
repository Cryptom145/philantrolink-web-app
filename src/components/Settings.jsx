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
        return (
          <div className="edit-profile-content">
            <h2>Edit Profile</h2>
            <form className="edit-profile-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <label htmlFor="role">Role</label>
                <input type="text" id="role" name="role" placeholder="Role" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" placeholder="Description"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="profilePicture">Profile Picture</label>
                <input type="file" id="profilePicture" name="profilePicture" />
              </div>
              <button type="submit" className="save-button">Save Changes</button>
            </form>
          </div>
        );
      case 'chats':
        return (
          <div className="chats-content">
            <h2>Chats</h2>
            <div className="chat-box">
              <div className="chat-message received">
                <p>Hi there! How can I help you today?</p>
                <span className="timestamp">10:00 AM</span>
              </div>
              <div className="chat-message sent">
                <p>I need some assistance with my account.</p>
                <span className="timestamp">10:01 AM</span>
              </div>
              <div className="chat-message received">
                <p>Sure, what seems to be the issue?</p>
                <span className="timestamp">10:02 AM</span>
              </div>
            </div>
          </div>
        );
      case 'helpSupport':
        return (
          <div className="help-support-content">
            <h2>Need support?</h2>
            <form className="help-support-form">
              <div className="form-group">
                <label htmlFor="supportName">Name</label>
                <input type="text" id="supportName" name="supportName" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="supportEmail">Email</label>
                <input type="text" id="supportEmail" name="supportEmail" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="supportDetails">Please enter details here</label>
                <textarea id="supportDetails" name="supportDetails" placeholder="Please enter details here"></textarea>
              </div>
              <button type="submit" className="submit-button">Contact Us!</button>
            </form>
          </div>
        );
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
