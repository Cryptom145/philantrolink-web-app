import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import userIcon from '../images/user-icon.png';
import philantrolinkLogo from '../images/philantrolink-logo.png';
import geolocationMap from '../images/geolocation-image.png';
import accountManagement from '../images/account-management.png';
import eventManager from '../images/event-manager.jpg';
import transaction from '../images/transaction.png';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid, CardActions } from '@mui/material';

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

  const goToGeolocation = () => {
    navigate('/geolocation');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const cardMediaStyle = {
    width: '100%',
    height: 250,
    objectFit: 'cover'
  };

  const geolocationCardStyle = {
    height: 220 // Adjust this height as needed
  };

  const geolocationCardMediaStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const searchableItems = [
    { path: '/', label: 'Dashboard' },
    { path: '/account-management', label: 'Account Management' },
    { path: '/event-manager', label: 'Event Manager' },
    { path: '/transactions', label: 'Transactions' },
    { path: '/geolocation', label: 'Geolocation' },
    { path: '/profile', label: 'Profile' },
    { path: '/settings', label: 'Settings' }
  ];

  useEffect(() => {
    if (searchQuery) {
      const results = searchableItems.filter(item =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div className="app-wrapper-dashboard">
      <header className="app-header-dashboard">
        <div className="header-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
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
        <h1 className="content-title">Philantrolink Status</h1>
        {searchResults.length > 0 ? (
          <div className="search-results">
            {searchResults.map((result, index) => (
              <div key={index} className="search-result-item">
                <a href={result.path}>{result.label}</a>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="content-geolocation">
              <Card sx={{ width: '100%', margin: 'auto', ...geolocationCardStyle }} onClick={goToGeolocation}>
                <CardActionArea>
                  <Grid container>
                    <Grid item xs={12} md={4}>
                      <CardMedia
                        component="img"
                        sx={geolocationCardMediaStyle}
                        image={geolocationMap}
                        alt="geolocation"
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Check Geolocation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Details about geolocation of events.
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            </div>
            <h1 className="content-title">Summary</h1>
            <div className="content-summary" style={{ border: 'none' }}>
              <Card sx={{ width: '100%', margin: 'auto', p: 0.1, boxShadow: 'none' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Card sx={{ height: '100%' }} onClick={goToAccountManagement}>
                      <CardActionArea>
                        <CardContent >
                          <CardMedia
                            component="img"
                            sx={cardMediaStyle}
                            image={accountManagement}
                            alt="Account Management"
                          />
                          <Typography gutterBottom variant="h6" component="div">
                            Accounts Registered
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Details about accounts registered.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Card sx={{ height: '100%' }} onClick={goToEventManager}>
                      <CardActionArea>
                        <CardContent>
                          <CardMedia
                            component="img"
                            sx={cardMediaStyle}
                            image={eventManager}
                            alt="Event Manager"
                          />
                          <Typography gutterBottom variant="h6" component="div">
                            Events Registered
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Details about events registered.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Card sx={{ height: '100%' }} onClick={goToTransactions}>
                      <CardActionArea>
                        <CardContent>
                          <CardMedia
                            component="img"
                            sx={cardMediaStyle}
                            image={transaction}
                            alt="Transactions"
                          />
                          <Typography gutterBottom variant="h6" component="div">
                            Transactions
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Details about transactions.
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
