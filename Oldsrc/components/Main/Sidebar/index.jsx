import React from 'react';
import Item from './Item';
import style from './style.module.scss';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as Home } from '../../../assets/icons/Home.svg';
import { ReactComponent as Discount } from '../../../assets/icons/Discount.svg';
import { ReactComponent as Dashboard } from '../../../assets/icons/Dashboard.svg';
import { ReactComponent as Message } from '../../../assets/icons/Message.svg';
import { ReactComponent as Notification } from '../../../assets/icons/Notification.svg';
import { ReactComponent as Setting } from '../../../assets/icons/Setting.svg';
import { NavLink } from 'react-router-dom';
import Logout from './Logout';

const Sidebar = () => {
  const arr = [
    { id: 1, path: '/', title: 'Jaegar Resto', icon: <Home fill="inherit" stroke="none" /> },
    {
      id: 2,
      path: '/discount',
      title: 'Discounts',
      icon: <Discount fill="inherit" stroke="none" />,
    },
    {
      id: 3,
      path: '/dashboard',
      title: 'Dashboard',
      icon: <Dashboard fill="inherit" stroke="none" />,
    },
    { id: 4, path: '/message', title: 'Message', icon: <Message fill="inherit" stroke="none" /> },
    {
      id: 5,
      path: '/notification',
      title: 'Notification',
      icon: <Notification fill="inherit" stroke="none" />,
    },
    { id: 6, path: '/setting', title: 'Setting', icon: <Setting fill="inherit" stroke="none" /> },
  ];
  return (
    <div className={style.wrapper}>
      <NavLink to="/" className={style.logo}>
        <Logo width="40" height="40" className={style.svg} />
      </NavLink>
      {arr.map((item) => (
        <Item {...item} key={item.id} />
      ))}
      <Logout />
    </div>
  );
};

export default Sidebar;
