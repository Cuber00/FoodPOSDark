import React from 'react';
import cl from './style.module.scss';
import { ReactComponent as Plus } from '../../../../assets/icons/Plus.svg';

export const DishCard = (props) => {
  const { id, image, available, price, title, handleClickItem } = props;

  return (
    <div
      className={cl.wrapper}
      onClick={() => handleClickItem({ id, image, available, price, title })}>
      <div className={cl.image}>
        <img src={image} alt={title} />
        <Plus width="42px" height="42px" className={cl.svg} />
      </div>
      <div className={cl.content}>
        <div className={cl.title}>{title}</div>
        <div className={cl.params}>
          <div>$ {price}</div>
          <div className={cl.count}>{available} Bowls available</div>
        </div>
      </div>
    </div>
  );
};
