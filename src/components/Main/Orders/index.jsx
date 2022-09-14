import React, { useState } from 'react';
import MyRadioTab from '../../UI/MyRadioTab';
import style from './style.module.scss';
import OrderCard from '../../UI/Cards/OrderCard';
import MyButton from '../../UI/MyButton';
import Divider from '../../UI/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { convertAppearancePrice } from '../../../scripts/convertAppearancePrice';
import { toggleShowPaymentWindow } from '../../../redux/slice/orderSl';

const Orders = () => {
  const orderState = useSelector((state) => state.orderSl);
  const dispatch = useDispatch();
  let totalPrice = 0;
  orderState.order.forEach((i) => (totalPrice += i.price * i.count));
  const vl = (e) => {
    console.log(e);
  };
  const openPaymentWindow = () => {
    dispatch(toggleShowPaymentWindow(true));
  };
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Orders #{orderState.idOrder}</div>
      <div className={style.tabs}>
        <MyRadioTab id={1} text="Dine In" name="orderTabs" vl={vl} />
        <MyRadioTab id={2} text="To Go" name="orderTabs" vl={vl} />
        <MyRadioTab id={3} text="Delivery" name="orderTabs" vl={vl} />
      </div>
      <div className={style.header}>
        <div>Item</div>
        <div>Qty</div>
        <div>Price</div>
      </div>
      <Divider />
      <div className={style.content}>
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

      <MyButton isShadow={true} type="solid" styles={{ width: '100%' }} onClick={openPaymentWindow}>
        Continue to Payment
      </MyButton>
    </div>
  );
};

export default Orders;
