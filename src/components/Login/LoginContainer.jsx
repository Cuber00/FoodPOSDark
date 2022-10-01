import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FULFILLED } from 'redux/CONSTANTS';
import { fetchIdNewOrder } from 'redux/slice/order/orderAPI';
import { fetchLogin, loginStatusSl, openLogin, openSignUp } from 'redux/slice/user/user.slice';
import { LoginView } from './LoginView';

export const LoginContainer = () => {
  const dispatch = useDispatch();
  const status = useSelector(loginStatusSl);

  console.log(status);
  if (status === FULFILLED) {
    dispatch(fetchIdNewOrder());
  }

  const onSubmit = (data) => {
    dispatch(fetchLogin(data));
  };

  const handleBack = () => {
    dispatch(openLogin(false));
    dispatch(fetchIdNewOrder());
  };
  const linkSignUp = () => {
    dispatch(openLogin(false));
    dispatch(openSignUp(true));
  };
  return <LoginView onSubmit={onSubmit} handleBack={handleBack} linkSignUp={linkSignUp} />;
};
