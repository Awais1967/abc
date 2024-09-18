import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminLayout = () => {
  const user = useSelector((state) => state.Auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');  // Redirect to login if not an admin
    }
  }, [navigate, user]);

  return (
    <div>
      {user && user.role === 'admin' ? <Outlet /> : null}  {/* Only render if admin */}
    </div>
  );
};

export default AdminLayout;
