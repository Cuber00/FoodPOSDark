import React from 'react';
import style from './style.module.scss';
import { ReactComponent as Plus } from '../../../../assets/icons/Plus.svg';
const DishCard = ({ image, available, price, title }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.image}>
        <img src={image} alt={title} />
        <Plus width="42px" height="42px" className={style.svg} />
      </div>
      <div className={style.content}>
        <div className={style.title}>{title}</div>
        <div className={style.params}>
          <div>$ {price}</div>
          <div className={style.count}>{available} Bowls available</div>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
