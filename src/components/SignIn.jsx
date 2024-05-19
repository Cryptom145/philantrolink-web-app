import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../configs/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

import googleIcon from '../images/google-icon.png';
import facebookIcon from '../images/facebook-icon.png';
import philantrolinkLogo from '../images/philantrolink-logo.png';

function SignIn() {
  // State variables to store error message, email, and password
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Function to handle sign in with email and password
  const signInWithEmail = async () => {
    try {
      setErrorMessage('');

      // Check if email or password is empty
      if (email.trim() === '' || password.trim() === '') {
        setErrorMessage('Email and password are required.');
        return;
      }

      // Sign in with email and password using Firebase auth
      await signInWithEmailAndPassword(auth, email, password);

      // Clear email and password fields after successful sign in
      setEmail('');
      setPassword('');
    } catch (error) {
      // Handle specific error codes
      if (error.code === 'auth/invalid-credential') {
        setErrorMessage('Incorrect password. Please try again.');
      } else {
        setErrorMessage('Failed to sign in.');
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      setErrorMessage('');
      const result = await signInWithPopup(auth, googleProvider);
      navigate('/'); // Redirect to main page after successful login
    } catch (error) {
      setErrorMessage('Failed to sign in with Google. Please try again later.');
    }
  };

  const signInWithFacebook = () => {

    alert("Facebook login is not implemented yet. Stay tuned!");
  
  };

  const toggleBackgroundImage = (input) => {
    if (input.value.trim() !== '') {
      input.classList.add('has-content');
    } else {
      input.classList.remove('has-content');
    }
  };

  const goToSignUp = () => {
    navigate('/sign-up'); 
  };

  return (
    <div className={`sign-in-container blue-background`}>
      <div className='left-content'>
        <img src={philantrolinkLogo} alt='Philantrolink Logo' className='left-image' />
        <p><b>Philantrolink</b></p>
      </div> 
      <div className='content'>
        <div className='form'>
          <div className='title-container'>
            <h1 className='title'>Log-in</h1>
            <div className='error'>{errorMessage}</div>
          </div>
          <div className='input-container'>
            <div className='input-label'>Email</div>
            <input
              type='email'
              placeholder=''
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onInput={(e) => toggleBackgroundImage(e.target)}
            />
          </div>
          <div className='input-container'>
            <div className='input-label'>Password</div>
            <input
              type='password'
              placeholder=''
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onInput={(e) => toggleBackgroundImage(e.target)}
            />
          </div>
          <div className='button-container'>
            <button className='login' onClick={signInWithEmail}>Login</button>
            <div className='or-divider'>or with</div>
            <div className='social-login'>
              <img src={googleIcon} alt='Google' className='google-login' onClick={signInWithGoogle} />
              <img src={facebookIcon} alt='Facebook' className='facebook-login' onClick={signInWithFacebook}/>
            </div>
            <p className='register-link' onClick={goToSignUp}>Don't have an account? Sign up</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
