import React from 'react';
import Divider from '../../UI/Divider';
import MyButton from '../../UI/MyButton';
import Block from '../PaymentWindow/Payment/Block';
import style from './style.module.scss';
const Login = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.title}>Authorization</div>
        <div className={style.desc}>Log in to a previously created account</div>
      </div>
      <Divider />
      <div className={style.form}>
        <div className={style.row}>
          <Block title="Email" placeholder="Your email" />
        </div>
        <div className={style.row}>
          <Block title="Password" placeholder="Your password" />
          <span className={style.forgot}>Forgot Password?</span>
        </div>
      </div>
      <MyButton type="solid">Log in</MyButton>
      <div>Don't have an account? Sign in</div>
    </div>
  );
};

export default Login;
