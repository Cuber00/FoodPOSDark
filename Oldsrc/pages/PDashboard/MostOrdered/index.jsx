import React from 'react';
import Divider from '../../../components/UI/Divider';
import style from './style.module.scss';

import MySelect from '../../../components/UI/MySelect';
import MostOrderCard from '../../../components/UI/Cards/MostOrderCard';
import MyButton from '../../../components/UI/MyButton';
const MostOrdered = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.title}>Most Ordered</div>
        <MySelect />
      </div>
      <Divider />
      <div className={style.body}>
        <MostOrderCard />
        <MostOrderCard />
        <MostOrderCard />
        <MostOrderCard />
      </div>
      <MyButton type="outline" styles={{ width: '100%' }}>
        View All
      </MyButton>
    </div>
  );
};

export default MostOrdered;
