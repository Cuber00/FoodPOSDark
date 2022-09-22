import React from 'react';
import Divider from '../../components/UI/Divider';
import MostOrdered from './MostOrdered';
import MostTypeOrder from './MostTypeOrder';
import OrderReport from './OrderReport';
import OrderStat from './OrderStat';
import style from './style.module.scss';

const PDashboard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.header}>
          <div className={style.title}>Dashboard</div>
          <div className={style.date}>Tuesday, 2 Feb 2021</div>
        </div>
        <Divider />
        <OrderStat />
        <OrderReport />
      </div>
      <div className={style.sidebar}>
        <MostOrdered />
        <MostTypeOrder />
      </div>
    </div>
  );
};

export default PDashboard;
