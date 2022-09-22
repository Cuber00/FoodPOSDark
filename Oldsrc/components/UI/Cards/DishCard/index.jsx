import React from 'react';
import style from './style.module.scss';
import { ReactComponent as Plus } from '../../../../assets/icons/Plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addOrderItem, setOpenWindow } from '../../../../redux/slice/orderSl';

const DishCard = (props) => {
  const { id, image, available, price, title } = props;
  const { idOrder, isOpenWindow } = useSelector((state) => state.orderSl);

  const dispatch = useDispatch();
  const handleOpenWindow = () => {
    if (!isOpenWindow) dispatch(setOpenWindow(true));
  };

  const handleClickItem = () => {
    handleOpenWindow();
    dispatch(
      addOrderItem({
        id: idOrder,
        menu: { id, image, available, price, title },
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
