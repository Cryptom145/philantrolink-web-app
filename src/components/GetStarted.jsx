import React from 'react';
import { useNavigate } from 'react-router-dom';

import philantrolinkLogo from '../images/philantrolink-logo.png';
import getStartedImage from '../images/get-started-image.png'; 
import '../styles/GetStarted.css';

function GetStarted() {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/sign-in');
  };

  const goToSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <div className="get-started-page">
      <div className="get-started-header">
        <div className="get-started-header-left">
          <img src={philantrolinkLogo} alt="Philantrolink Logo" className="get-started-logo" />
          <span className="get-started-title"><b>Philantrolink</b></span>
        </div>
        <button onClick={goToSignUp} className="get-started-signup-button">Sign Up</button>
      </div>
      <div className="get-started-form">
        <div className="get-started-content">
          <div className="get-started-left">
            <h1>Welcome to Philantrolink</h1>
            <p>Get started by signing in or creating a new account!</p>
            <div className="get-started-button-container">
              <button onClick={goToSignIn}>Get started</button>
            </div>
          </div>
          <div className="get-started-right">
            <img src={getStartedImage} alt="Get Started" className="get-started-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
