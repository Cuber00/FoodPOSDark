import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegister, openLogin, openSignUp } from 'redux/slice/user/user.slice';
import { FormSignUpView } from './FormSignUpView';
export const FormSignUpContent = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(fetchRegister(data));
  };
  const linkLogin = () => {
    dispatch(openLogin(true));
    dispatch(openSignUp(false));
  };

  return <FormSignUpView onSubmit={onSubmit} linkLogin={linkLogin} />;
};
