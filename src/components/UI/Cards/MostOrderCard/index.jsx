import React from 'react';
import style from './style.module.scss';
const MostOrderCard = () => {
  return (
    <div className={style.wrapper}>
      <img className={style.image} src="http://localhost:3000/assets/images/1.png" alt="" />
      <div className={style.content}>
        <div className={style.title}>Spicy seasoned seafood noodles</div>
        <div className={style.count}>200 dishes ordered</div>
      </div>
    </div>
  );
};

export default MostOrderCard;
