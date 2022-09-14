import React from 'react';
import style from './style.module.scss';
import { ReactComponent as IBack } from '../../../../../assets/icons/Back.svg';
import MyButton from '../../../../UI/MyButton';
import Divider from '../../../../UI/Divider';
import { useSelector } from 'react-redux';
import OrderCard from '../../../../UI/Cards/OrderCard';
import { convertAppearancePrice } from '../../../../../scripts/convertAppearancePrice';
const Confirmation = ({ closePaymentWindow }) => {
  const orderState = useSelector((state) => state.orderSl);
  let totalPrice = 0;
  orderState.order.forEach((i) => (totalPrice += i.price * i.count));
  return (
    <>
      <div onClick={closePaymentWindow} className={style.back}>
        <IBack />
      </div>

      <div className={style.header}>
        <div>
          <div className={style.title}>Confirmation</div>
          <div className={style.desc}>Orders #{orderState.idOrder}</div>
        </div>
        <MyButton type="solid" isShowIcon={true} onClick={closePaymentWindow} />
      </div>
      <Divider />
      <div className={style.items}>
        {orderState.order.map((i) => (
          <OrderCard {...i} key={i.id} />
        ))}
      </div>
      <div className={style.totalData}>
        <div className={style.row}>
          <span>Discount</span>
          <span>$0</span>
        </div>
        <div className={style.row}>
          <span>Sub total</span>
          <span>$ {convertAppearancePrice(totalPrice)}</span>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
