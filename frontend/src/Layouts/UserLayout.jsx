import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserLayout = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

  if (!user) {
    return <div>Loading...</div>; // Show a loading indicator while checking user state
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
