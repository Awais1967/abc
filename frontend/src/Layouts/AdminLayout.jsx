import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminLayout = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirect to login if user doesn't exist
      navigate('/login');
    } else if (user.role !== 'admin') {
      // If user is not admin, redirect to home page
      navigate('/');
    }
  }, [navigate, user]);

  // Display a loading screen while user data is being fetched
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
