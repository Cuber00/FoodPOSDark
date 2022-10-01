import React from 'react';
import { ROOT, DISCOUNT, DASHBOARD, NOTIFICATION, SETTING, MESSAGE } from 'navigation/CONSTANTS';
import { ReactComponent as Home } from 'assets/icons/Home.svg';
import { ReactComponent as Discount } from 'assets/icons/Discount.svg';
import { ReactComponent as Dashboard } from 'assets/icons/Dashboard.svg';
import { ReactComponent as Message } from 'assets/icons/Message.svg';
import { ReactComponent as Notification } from 'assets/icons/Notification.svg';
import { ReactComponent as Setting } from 'assets/icons/Setting.svg';
import { SidebarView } from './SidebarView';
import { loginStatusSl, setUser, userSl } from 'redux/slice/user/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { FULFILLED } from 'redux/CONSTANTS';
import { fetchIdNewOrder } from 'redux/slice/order/orderAPI';
export const SidebarContainer = () => {
  const categor = [
    { id: 1, path: ROOT, title: 'Jaegar Resto', icon: <Home fill="inherit" stroke="none" /> },
    {
      id: 2,
      path: DISCOUNT,
      title: 'Discounts',
      icon: <Discount fill="inherit" stroke="none" />,
    },
    {
      id: 3,
      path: DASHBOARD,
      title: 'Dashboard',
      icon: <Dashboard fill="inherit" stroke="none" />,
    },
    { id: 4, path: MESSAGE, title: 'Message', icon: <Message fill="inherit" stroke="none" /> },
    {
      id: 5,
      path: NOTIFICATION,
      title: 'Notification',
      icon: <Notification fill="inherit" stroke="none" />,
    },
    { id: 6, path: SETTING, title: 'Setting', icon: <Setting fill="inherit" stroke="none" /> },
  ];
  const dispatch = useDispatch();
  const status = useSelector(loginStatusSl);
  React.useEffect(() => {
    if (status === FULFILLED) {
      dispatch(fetchIdNewOrder());
    }
  }, [status]);

  React.useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
  }, []);
  const login = useSelector(userSl);
  return <SidebarView categor={categor} login={login} />;
};
