import React from 'react';

function Error404() {
  return (
    <div style={{ backgroundColor: '#073e79', minHeight: '100vh', color: '#ffffff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3em' }}>404 Page Not Found</h1>
        <p style={{ fontSize: '1.5em' }}>Oops! The page you are looking for could not be found.</p>
      </div>
    </div>
  );
}

export default Error404;