import React from 'react';
import style from './style.module.scss';
import { ReactComponent as IEdit } from '../../../../assets/icons/Edit.svg';
const DishCardManag = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <img className={style.image} src="http://localhost:3000/assets/images/1.png" alt="" />
        <div>
          <div className={style.title}>Spicy seasoned seafood noodles</div>
          <div className={style.params}>
            <div className={style.price}>$ 2.29</div>
            <div>20 Bowls</div>
          </div>
        </div>
      </div>
      <button className={style.btn}>
        <IEdit fill="inherit" /> Edit dish
      </button>
    </div>
  );
};

export default DishCardManag;
