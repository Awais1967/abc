// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { post } from '../services/ApiEndpoint';
import { Logout } from '../redux/AuthSlice';

const Home = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdminNavigation = () => {
    if (user && user.role === 'admin') {
      navigate('/admin');
    }
  };

  const handleLogout = async () => {
    try {
      const request = await post('/api/auth/logout');
      const response = request.data;
      if (request.status === 200) {
        dispatch(Logout()); // Call the Logout action
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className='home-container'>
      <div className='user-card'>
        <h2>Welcome, {user && user.name}</h2>
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
