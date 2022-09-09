import React from 'react';
import style from './style.module.scss';
import { ReactComponent as IArrowUp } from '../../../../assets/icons/ArrowUp.svg';
const SummaryCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.icon}>
          <img src="assets/icons/Coin.svg" alt="" />
        </div>
        <div className={`${style.status} ${style.up}`}>
          <div className={style.percentages}>32.40</div>
          <div className={style.statusIcon}>
            <IArrowUp className={style.IArrow} width="14" height="14" />
          </div>
        </div>
      </div>
      <div>
        <div className={style.summaryCount}>23,456</div>
        <div className={style.title}>Total Revenue</div>
      </div>
    </div>
  );
};

export default SummaryCard;
