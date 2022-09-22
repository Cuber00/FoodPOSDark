import React from 'react';
import style from './style.module.scss';

import { ReactComponent as IArrowUp } from '../../../../assets/icons/ArrowUp.svg';
const SummaryCard = (props) => {
  const { icon, growth, summaryCount, title } = props;
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.icon}>
          <img src={`assets/icons/${icon}`} alt="" />
        </div>
        <div
          className={growth >= 0 ? `${style.status} ${style.up}` : `${style.status} ${style.down}`}>
          <div className={style.percentages}>{growth}</div>
          <div className={style.statusIcon}>
            <IArrowUp className={style.IArrow} width="14" height="14" />
          </div>
        </div>
      </div>
      <div>
        <div className={style.summaryCount}>{summaryCount}</div>
        <div className={style.title}>{title}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
