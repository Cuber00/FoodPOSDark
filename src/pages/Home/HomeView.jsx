import React from 'react';
import cl from './style.module.scss';
import { Header, Content, AsideNewOrder } from 'pages/Home/components/';
import { Menu } from 'components';

const HomeView = (props) => {
  return (
    <div className={cl.root}>
      <div className={cl.content}>
        <Header />
        <Menu />
        <Content />
      </div>
      {props.isOpenOrder && <AsideNewOrder />}
    </div>
  );
};
export default HomeView;
