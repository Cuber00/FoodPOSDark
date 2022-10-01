import React from 'react';
import { useSelector } from 'react-redux';
import { isOpenOrderSl } from 'redux/slice/order/order.slice';
import { openLoginSl, openSignUpSl } from 'redux/slice/user/user.slice';
import HomeView from './HomeView';

export const HomeContainer = () => {
  const isOpenOrder = useSelector(isOpenOrderSl);
  const isOpenLogin = useSelector(openLoginSl);
  const isOpenSignUp = useSelector(openSignUpSl);
  return (
    <HomeView
      title="Home"
      isOpenOrder={isOpenOrder}
      isOpenLogin={isOpenLogin}
      isOpenSignUp={isOpenSignUp}
    />
  );
};
