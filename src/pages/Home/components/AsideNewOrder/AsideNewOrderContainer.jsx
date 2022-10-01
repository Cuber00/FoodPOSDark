import React from 'react';
import { AsideNewOrderView } from './AsideNewOrderView';
import { useSelector, useDispatch } from 'react-redux';
import { openLogin, userSl } from 'redux/slice/user/user.slice';
import { hidenModalOrder } from 'redux/slice/order/order.slice';
export const AsideNewOrderContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector(userSl);

  const handleButton = () => {
    if (!user) {
      console.log('Не авторизован');
      dispatch(openLogin(true));
      dispatch(hidenModalOrder());
    } else {
      console.log('Пользователь авторизован');
    }
  };
  return <AsideNewOrderView handleButton={handleButton} />;
};
