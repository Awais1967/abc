// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  const handleAdminNavigation = () => {
    if (user && user.role === 'admin') {
      navigate('/admin');
    }
  };

  const handleLogout = () => {
    // Implement logout functionality, e.g., clearing user from state and localStorage
    navigate('/login');
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className='home-container'>
      <div className='user-card'>
        <h2>Welcome, {user.name}</h2>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
        {user.role === 'admin' && (
          <button className='admin-btn' onClick={handleAdminNavigation}>
            Go to Admin page
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
