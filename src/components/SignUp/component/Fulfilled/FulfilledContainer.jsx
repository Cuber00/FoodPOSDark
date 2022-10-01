import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchIdNewOrder } from 'redux/slice/order/orderAPI';
import { openLogin, openSignUp } from 'redux/slice/user/user.slice';
import { FulfilledView } from './FulfilledView';

export const FulfilledContainer = () => {
  const dispatch = useDispatch();
  const navigateHome = () => {
    dispatch(openLogin(false));
    dispatch(openSignUp(false));
    dispatch(fetchIdNewOrder());
  };
  return <FulfilledView navigateHome={navigateHome} />;
};
