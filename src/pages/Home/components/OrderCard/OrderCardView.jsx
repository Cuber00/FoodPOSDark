import React from 'react';
import cl from './style.module.scss';
import { ReactComponent as ITrash } from 'assets/icons/Trash.svg';
import { Button, Input } from 'components';
export const OrderCardView = (props) => {
  const { id, title, image, parsedPrice, totalPrice, count, handleCountDishes } = props;

  return (
    <div className={cl.wrapper}>
      <div className={cl.row}>
        <div className={cl.wrapContent}>
          <div className={cl.content}>
            <img className={cl.image} src={image} alt="" />
            <div className={cl.text}>
              <div className={cl.title}>{title}</div>
              <div className={cl.price}>{parsedPrice}</div>
            </div>
          </div>
          <button className={cl.btnAdd} onClick={() => handleCountDishes('increment')}>
            {count}
          </button>
        </div>
        <div className={cl.totalPrice}>{totalPrice}</div>
      </div>
      <div className={cl.row}>
        <Input placeholder="Order Note..." value={''} onChanges={() => {}} />
        <Button
          type="outline"
          onClick={() => handleCountDishes('decrement')}
          icon={<ITrash fill="inherit" stroke="none" width="20" height="20" />}
        />
      </div>
    </div>
  );
};
