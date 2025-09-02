import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('https://news-app-backend-abtxg01lp-sanket-singhs-projects.vercel.app/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      })
      .then(res => res.json())
      .then(data => {
        if (data.role) setUserRole(data.role);
      })
      .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  return (
    <div className="bg-light" style={{minHeight: '100vh'}}>
      <Navbar userRole={userRole} setUserRole={setUserRole} />
      <main>
        <NewsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;