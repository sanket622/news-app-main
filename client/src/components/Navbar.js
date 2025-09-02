import React, { useState } from 'react';

const Navbar = ({ userRole, setUserRole }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', email: '', phone: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://news-app-backend-abtxg01lp-sanket-singhs-projects.vercel.app/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: credentials.username, password: credentials.password })
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUserRole(data.role);
        setShowLogin(false);
        setCredentials({ username: '', email: '', phone: '', password: '' });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://news-app-backend-abtxg01lp-sanket-singhs-projects.vercel.app/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        setUserRole(data.role);
        setShowSignup(false);
        setCredentials({ username: '', email: '', phone: '', password: '' });
        alert('Account created successfully!');
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert('Signup failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserRole(null);
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        <h1 className="navbar-brand mb-0 h1">Bollywood News</h1>
        <div className="d-none d-md-flex">
          <span className="nav-link text-light me-3" style={{cursor: 'pointer'}}>Home</span>
          <span className="nav-link text-light me-3" style={{cursor: 'pointer'}}>Bollywood News</span>
          <span className="nav-link text-light me-3" style={{cursor: 'pointer'}}>Politics</span>
          {!userRole ? (
            <>
              <span className="nav-link text-light me-3" style={{cursor: 'pointer'}} onClick={() => setShowSignup(true)}>Signup</span>
              <span className="nav-link text-light me-3" style={{cursor: 'pointer'}} onClick={() => setShowLogin(true)}>Login</span>
            </>
          ) : (
            <span className="nav-link text-light me-3" style={{cursor: 'pointer'}} onClick={handleLogout}>Logout</span>
          )}
          {userRole === 'admin' && (
            <span className="nav-link text-light me-3" style={{cursor: 'pointer'}}>Admin</span>
          )}
        </div>
        <button className="navbar-toggler d-md-none" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      {showLogin && (
        <div className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow" style={{zIndex: 1050}}>
          <form onSubmit={handleLogin}>
            <h5>Login</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
            <button type="submit" className="btn btn-primary me-2">Login</button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowLogin(false)}>Cancel</button>
          </form>
        </div>
      )}
      {showSignup && (
        <div className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow" style={{zIndex: 1050}}>
          <form onSubmit={handleSignup}>
            <h5>Sign Up</h5>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              required
            />
            <input
              type="tel"
              className="form-control mb-2"
              placeholder="Phone Number"
              value={credentials.phone}
              onChange={(e) => setCredentials({...credentials, phone: e.target.value})}
              required
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />

            <button type="submit" className="btn btn-primary me-2">Sign Up</button>
            <button type="button" className="btn btn-secondary" onClick={() => setShowSignup(false)}>Cancel</button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
