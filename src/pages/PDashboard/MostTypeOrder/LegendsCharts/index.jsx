import React from 'react';
import style from './style.module.scss';

const LegendsCharts = ({ data }) => {
  return (
    <div className={style.wrapper}>
      {data.map((i) => (
        <div className={style.item} style={{ '--my-color-var': i.style }} key={i.id}>
          <span>{i.id}</span>
          <span>{i.data[0].y} customers</span>
        </div>
      ))}
    </div>
  );
};

export default LegendsCharts;
