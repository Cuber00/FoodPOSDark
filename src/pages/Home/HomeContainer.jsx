import React from 'react';
import { useSelector } from 'react-redux';
import { isOpenOrderSl } from 'redux/slice/order/order.slice';
import HomeView from './HomeView';

export const HomeContainer = () => {
  const isOpenOrder = useSelector(isOpenOrderSl);

  return <HomeView title="Home" isOpenOrder={isOpenOrder} />;
};
