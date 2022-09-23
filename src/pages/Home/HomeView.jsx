import React from 'react';
import cl from './style.module.scss';
import { Header, Dishes } from 'pages/Home/components/';
import { Menu } from 'components';
const HomeView = () => {
  return (
    <div className={cl.root}>
      <Header />
      <Menu />
      <Dishes />
    </div>
  );
};
export default HomeView;
