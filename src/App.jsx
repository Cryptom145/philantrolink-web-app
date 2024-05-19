import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './configs/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Error404 from './components/Error404';
import GetStarted from './components/GetStarted';
import AccountManagement from './components/AccountManagement';
import EventManager from './components/EventManager';
import Transactions from './components/Transactions';
import Profile from './components/Profile';
import Settings from './components/Settings';
import LoadingSpinner from './components/LoadingSpinner'; // Import the LoadingSpinner component

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const onSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      {loading ? (
        <LoadingSpinner /> // Use the LoadingSpinner component
      ) : (
        <div style={{ backgroundColor: user ? '#ffffff' : '#073e79' }}>
          {user && <button onClick={onSignOut} className="sign-out">Sign out</button>}
          <div>
            <Router>
              <Routes>
                <Route path="/sign-up" element={user ? <Navigate to="/" /> : <SignUp />} />
                <Route path="/sign-in" element={user ? <Navigate to="/" /> : <SignIn />} />
                <Route path="/" element={user ? <Dashboard /> : <GetStarted />} />
                <Route path="/account-management" element={user ? <AccountManagement /> : <GetStarted />} />
                <Route path="/event-manager" element={user ? <EventManager /> : <GetStarted />} />
                <Route path="/transactions" element={user ? <Transactions /> : <GetStarted />} />
                <Route path="/profile" element={user ? <Profile /> : <GetStarted />} />
                <Route path="/settings" element={user ? <Settings /> : <GetStarted />} />
                <Route path="*" element={<Error404 />} />
              </Routes>
            </Router>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
