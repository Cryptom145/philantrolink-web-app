import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import userIcon from '../images/user-icon.png';
import philantrolinkLogo from '../images/philantrolink-logo.png';

function EventManager() {
  const navigate = useNavigate();
  const location = useLocation();

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

  const approveEvent = () => {

    alert("Event approved!");
  
  };

  const declineEvent = () => {

    alert("Event declined!");
  
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
        <h1 className="content-title2">Event Manager</h1>
        <div className="table-container">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Event ID</th>
                <th>Account ID</th>
                <th>Event Name</th>
                <th>Event Type</th>
                <th>Event Description</th>
                <th>Event Location</th>
                <th>Event Date</th>
                <th>Event Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>11</td>
                <td>1</td>
                <td>Fundraiser for Cancer Patients</td>
                <td>Charity Event</td>
                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                  type and scrambled it to make a type specimen book.</td>
                <td>Cebu City</td>
                <td>May 28, 2024</td>
                <td>Pending</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-button" onClick={approveEvent}>&#10003;</button>
                    <button className="action-button" onClick={declineEvent}>&#10007;</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>2</td>
                <td>Clean and Green Program</td>
                <td>Volunteer Event</td>
                <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
                  type and scrambled it to make a type specimen book.</td>
                <td>Cebu City</td>
                <td>May 25, 2024</td>
                <td>Pending</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-button" onClick={approveEvent}>&#10003;</button>
                    <button className="action-button" onClick={declineEvent}>&#10007;</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EventManager;