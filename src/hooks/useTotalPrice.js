import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { convertAppearancePrice } from '../scripts/convertAppearancePrice';

export const useTotalPrice = () => {
  const menu = useSelector((state) => state.orderSl.newOrder.menu);
  return useMemo(
    () => convertAppearancePrice(menu.reduce((sum, i) => sum + i.price * i.count, 0)),
    [menu],
  );
};
