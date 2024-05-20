import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import userIcon from '../images/user-icon.png';
import philantrolinkLogo from '../images/philantrolink-logo.png';

function AccountManagement() {
  const navigate = useNavigate();
  const location = useLocation();
  const [editableCell, setEditableCell] = useState(null);
  const [editedValue, setEditedValue] = useState('');

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

  const handleEditClick = (value) => {
    setEditableCell(value);
    setEditedValue(value);
  };

  // Function to handle change in edited value
  const handleChange = (e) => {
    setEditedValue(e.target.value);
  };

  // Function to save the edited value and exit edit mode
  const handleSave = () => {
    // Save the edited value to the database or state
    setEditableCell(null);
    // You can add logic here to save the edited value
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
            className={`sidebar-button ${location.pathname === '/'? 'active' : ''}`}
            onClick={goToDashboard}
          >
            Dashboard
          </button>
          <button
            className={`sidebar-button ${location.pathname === '/account-management'? 'active' : ''}`}
            onClick={goToAccountManagement}
          >
            Account Management
          </button>
          <button
            className={`sidebar-button ${location.pathname === '/event-manager'? 'active' : ''}`}
            onClick={goToEventManager}
          >
            Event Manager
          </button>
          <button
            className={`sidebar-button ${location.pathname === '/transactions'? 'active' : ''}`}
            onClick={goToTransactions}
          >
            Transactions
          </button>
        </div>
        <div className="sidebar-bottom-buttons">
          <button
            className={`sidebar-button ${location.pathname === '/profile'? 'active' : ''}`}
            onClick={goToProfile}
          >
            Profile
          </button>
          <button
            className={`sidebar-button ${location.pathname === '/settings'? 'active' : ''}`}
            onClick={goToSettings}
          >
            Settings
          </button>
        </div>
      </div>
      <div className="content-dashboard">
        <h1 className="content-title2">Account Management</h1>
        <div className="table-container">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Account ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>Assistance Provided</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td onClick={() => handleEditClick('John Doe')}>
                {editableCell === 'John Doe' ? (
                    <input
                      type="text"
                      value={editedValue}
                      onChange={handleChange}
                      onBlur={handleSave}
                      autoFocus
                    />
                  ) : (
                    'John Doe'
                  )}</td>
                <td>john@example.com</td>
                <td>1234567890</td>
                <td>Water</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Doe John</td>
                <td>john12345@example.com</td>
                <td>1234567890</td>
                <td>Food</td>
              </tr>
              <tr>
                <td>3</td>
                <td>John Eric</td>
                <td>john145@example.com</td>
                <td>1234567890</td>
                <td>Food</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AccountManagement;