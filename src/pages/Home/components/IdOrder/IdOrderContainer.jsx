import React from 'react';
import { useSelector } from 'react-redux';
import { idOrderSl } from 'redux/slice/order/order.slice';
import { convertIdOrder } from 'utils/convertIdOrder';
import { IdOrderView } from './IdOrderView';

export const IdOrderContainer = () => {
  const idOrder = convertIdOrder(useSelector(idOrderSl));
  return <IdOrderView idOrder={idOrder} />;
};
