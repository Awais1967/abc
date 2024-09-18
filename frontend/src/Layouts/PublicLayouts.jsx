import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

const PublicLayouts = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/admin'); // Redirect to admin page
      } else {
        navigate('/'); // Redirect to home page
      }
    }
  }, [user, navigate]);

  // Show a loading state if user data is being fetched
//   if (!user) {
//     return <div>Loading...</div>;
//   }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicLayouts;
