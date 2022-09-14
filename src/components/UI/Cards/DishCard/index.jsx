import React from 'react';
import style from './style.module.scss';
import { ReactComponent as Plus } from '../../../../assets/icons/Plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderItem, fetchOrderId, setIsOpenWindow } from '../../../../redux/slice/orderSl';

const DishCard = ({ id, image, available, price, title }) => {
  const dispatch = useDispatch();
  const isOpenWindow = useSelector((state) => state.orderSl.isOpenWindow);

  const handleClickItem = () => {
    if (!isOpenWindow) {
      dispatch(setIsOpenWindow(true));
      //Получаем ID для заказа и резервируем его
      dispatch(fetchOrderId());
    }
    dispatch(
      addOrderItem({
        id,
        image,
        title,
        price,
      }),
    );
  };

  return (
    <div className={style.wrapper} onClick={handleClickItem}>
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
