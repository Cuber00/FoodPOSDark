import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/slice/user/user.slice';
import { LogoutView } from './LogoutView';

export const LogoutContainer = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setUser(null));
    localStorage.removeItem('user');
  };
  return <LogoutView handleLogout={handleLogout} />;
};
