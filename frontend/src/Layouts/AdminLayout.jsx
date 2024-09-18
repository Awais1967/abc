import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminLayout = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

//   useEffect(() => {
//     if (!user || user.role !== 'admin') {
//       navigate('/login');
//     }
//   }, [navigate, user]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
