import React, { useEffect, useRef, useState } from 'react';
import MyButton from '../../MyButton';
import MyInput from '../../MyInput';
import style from './style.module.scss';
import { convertAppearancePrice } from '../../../../scripts/convertAppearancePrice';
import { ReactComponent as ITrash } from '../../../../assets/icons/Trash.svg';
const OrderCard = () => {
  const data = {
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam est at nihil dolore! ',
    price: 33333.48,
  };
  const [count, setCount] = useState(1);
  const title = data.title.length > 20 ? `${data.title.slice(0, 18)}...` : data.title;
  const price = convertAppearancePrice(data.price);
  const totalPrice = convertAppearancePrice(data.price * count);

  const handleButtonRemove = () => {
    if (count >= 1) setCount(count - 1);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.row}>
        <div className={style.wrapContent}>
          <div className={style.content}>
            <img className={style.image} src="http://localhost:3000/assets/images/1.png" alt="" />
            <div className={style.text}>
              <div className={style.title}>{title}</div>
              <div className={style.price}>{price}</div>
            </div>
          </div>
          <button className={style.btnAdd} onClick={() => setCount(count + 1)}>
            {count}
          </button>
        </div>

        <div className={style.totalPrice}>{totalPrice}</div>
      </div>
      <div className={style.row}>
        <MyInput placeholder="Order Note..." />
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
