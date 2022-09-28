import React from 'react';
import { useSelector } from 'react-redux';
import { menuOrderSl } from 'redux/slice/order/order.slice';
import { FormOrderBodyView } from './FormOrderBodyView';

export const FormOrderBodyContainer = () => {
  const dishes = useSelector(menuOrderSl);

  return <FormOrderBodyView dishes={dishes} />;
};
