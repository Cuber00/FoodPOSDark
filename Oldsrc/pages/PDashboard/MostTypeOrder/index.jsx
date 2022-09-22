import React from 'react';
import Divider from '../../../components/UI/Divider';
import MySelect from '../../../components/UI/MySelect';
import style from './style.module.scss';

import RadialCharts from './RadialCharts';
import LegendsCharts from './LegendsCharts';
const MostTypeOrder = () => {
  const data = [
    {
      id: 'Dine In',
      data: [
        {
          x: 0,
          y: 8,
        },
      ],
      style: 'rgba(101, 176, 246, 1)',
    },
    {
      id: 'To Go',
      data: [
        {
          x: 1,
          y: 7,
        },
      ],
      style: 'rgba(255, 181, 114, 1)',
    },
    {
      id: 'Delivery',
      data: [
        {
          x: 2,
          y: 10,
        },
      ],
      style: 'rgba(255, 124, 163, 1)',
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.title}>Most Type of Order</div>
        <MySelect />
      </div>
      <Divider className={style.divider} />
      <div className={style.body}>
        <div style={{ width: '60%', height: 'inherit' }}>
          <RadialCharts data={data} />
        </div>

        <LegendsCharts data={data} />
      </div>
    </div>
  );
};

export default MostTypeOrder;
