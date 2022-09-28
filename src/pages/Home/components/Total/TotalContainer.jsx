import React from 'react';
import { useSelector } from 'react-redux';
import { menuOrderSl } from 'redux/slice/order/order.slice';
import { convertAppearancePrice } from 'utils/convertAppearancePrice';
import { TotalView } from './TotalView';

export const TotalContainer = () => {
  const totalPrice = useSelector(menuOrderSl).reduce(
    (acc, item) => acc + item.price * item.count,
    0,
  );
  const discount = `$ 0`;
  const subTotal = `$ ${convertAppearancePrice(totalPrice)}`;
  return <TotalView discount={discount} subTotal={subTotal} />;
};
