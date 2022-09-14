import React, { useEffect, useRef, useState } from 'react';
import MyButton from '../../MyButton';
import MyInput from '../../MyInput';
import style from './style.module.scss';
import { convertAppearancePrice } from '../../../../scripts/convertAppearancePrice';
import { ReactComponent as ITrash } from '../../../../assets/icons/Trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { handleCountItem, setCount, setNotes } from '../../../../redux/slice/orderSl';

const OrderCard = ({ id, title, image, price, count }) => {
  const dispatch = useDispatch();
  const parsedTitle = title.length > 20 ? `${title.slice(0, 18)}...` : title;
  const parsedPrice = convertAppearancePrice(price);
  const totalPrice = convertAppearancePrice(price * count);

  const handleButtonRemove = () => {
    dispatch(handleCountItem({ id, type: 'decrement' }));
  };
  const handleButtonAdd = () => {
    dispatch(handleCountItem({ id, type: 'increment' }));
  };
  const onChanges = (e) => {
    dispatch(setNotes({ id, value: e }));
  };
  const valueNotes = useSelector((state) => state.orderSl.order.filter((i) => i.id === id))[0]
    .notes;
  return (
    <div className={style.wrapper}>
      <div className={style.row}>
        <div className={style.wrapContent}>
          <div className={style.content}>
            <img className={style.image} src={image} alt="" />
            <div className={style.text}>
              <div className={style.title}>{parsedTitle}</div>
              <div className={style.price}>{parsedPrice}</div>
            </div>
          </div>
          <button className={style.btnAdd} onClick={handleButtonAdd}>
            {count}
          </button>
        </div>

        <div className={style.totalPrice}>{totalPrice}</div>
      </div>
      <div className={style.row}>
        <MyInput placeholder="Order Note..." value={valueNotes} onChanges={onChanges} />
        <MyButton
          type="outline"
          onClick={handleButtonRemove}
          icon={<ITrash fill="inherit" stroke="none" width="20" height="20" />}
        />
      </div>
    </div>
  );
};

export default OrderCard;
