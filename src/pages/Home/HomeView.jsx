import React from 'react';
import cl from './style.module.scss';
import { Header, Content, AsideNewOrder } from 'pages/Home/components/';
import { Login, Menu, SignUp } from 'components';

const HomeView = (props) => {
  return (
    <div className={cl.root}>
      <div className={cl.content}>
        <Header />
        <Menu />
        <Content />
      </div>
      {/* Вынеси модалки в отдельный компонент со своим контейнером */}
      {props.isOpenOrder && <AsideNewOrder />}
      {props.isOpenLogin && <Login />}
      {props.isOpenSignUp && <SignUp />}
      {/* 
      <SignUp /> */}
    </div>
  );
};
export default HomeView;
