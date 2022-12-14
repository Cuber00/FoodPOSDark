import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchRegister, openLogin, openSignUp } from 'redux/slice/user/user.slice';
import { SignUpView } from './SignUpView';

export const SignUpContainer = () => {
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log('Отправка формы Регистрации');
    dispatch(fetchRegister(data));
  };
  const handleBack = () => {
    dispatch(openLogin(true));
    dispatch(openSignUp(false));
  };

  return <SignUpView onSubmit={onSubmit} handleBack={handleBack} />;
};
