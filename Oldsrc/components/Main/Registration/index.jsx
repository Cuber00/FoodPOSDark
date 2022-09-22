import React from 'react';
import Divider from '../../UI/Divider';
import MyButton from '../../UI/MyButton';
import Block from '../PaymentWindow/Payment/Block';
import style from './style.module.scss';
const Registration = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.title}>Registration</div>
        <div className={style.desc}>Create an account to place an order</div>
      </div>
      <Divider />
      <div className={style.form}>
        <div className={style.row}>
          <Block title="Full name" placeholder="Enter your full name" />
        </div>
        <div className={style.row}>
          <Block title="Email" placeholder="Your email" />
        </div>
        <div className={style.row}>
          <Block title="Password" placeholder="Your password" />
        </div>
        <div className="row">
          <input type="checkbox" id="idchecbox" />
          <label htmlFor="idchecbox">I agree all statements as terms of service</label>
        </div>
      </div>
      <MyButton type="solid">Log in</MyButton>
      <div>Don't have an account? Sign in</div>
    </div>
  );
};

export default Registration;
