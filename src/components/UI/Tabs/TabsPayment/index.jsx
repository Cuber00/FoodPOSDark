import React, { useState } from 'react';
import style from './style.module.scss';
import { ReactComponent as Card } from '../../../../assets/icons/Card.svg';
import { ReactComponent as Paypal } from '../../../../assets/icons/Paypal.svg';
import { ReactComponent as Wallet } from '../../../../assets/icons/Wallet.svg';
const TabsPayment = ({ tabs, setTabs }) => {
  const arr = [
    { id: 1, title: 'Credit Card', icon: <Card fill="inherit" stroke="none" /> },
    { id: 2, title: 'Paypal', icon: <Paypal stroke="inherit" fill="none" /> },
    { id: 3, title: 'Cash', icon: <Wallet fill="inherit" stroke="none" /> },
  ];
  return (
    <div className={style.wrapper}>
      {arr.map((item) => (
        <div
          className={tabs === item.id ? `${style.item} ${style.active}` : style.item}
          onClick={() => setTabs(item.id)}>
          {item.icon}
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default TabsPayment;
