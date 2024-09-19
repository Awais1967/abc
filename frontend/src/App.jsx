import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from 'react-hot-toast';
import AdminLayout from './Layouts/AdminLayout';
import UserLayout from './Layouts/UserLayout';
import PublicLayouts from './Layouts/PublicLayouts';
import { useDispatch } from 'react-redux';
import { updateUser } from './redux/AuthSlice';

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(updateUser())
  })
  return (
    <>
      <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
        </Route>
        <Route path="/" element={<PublicLayouts />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
