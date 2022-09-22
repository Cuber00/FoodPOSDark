import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddOrder } from '../../../../redux/slice/orderSl';
import Divider from '../../../UI/Divider';
import FormCreditCard from './FormCreditCard';
import FormPaypal from './FormPaypal';
import FormCash from './FormCash';
import style from './style.module.scss';
import MyButton from '../../../UI/MyButton';
import TabsPayment from '../../../UI/Tabs/TabsPayment';

const Payment = ({ closePaymentWindow }) => {
  const [tabs, setTabs] = useState(1);
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderSl.newOrder);
  const addOrder = () => {
    dispatch(fetchAddOrder(order));
  };
  return (
    <>
      <div>
        <div className={style.title}>Payment</div>
        <div className={style.desc}>3 payment method available</div>
      </div>
      <Divider />
      <div className={style.content}>
        <div className={style.titleForm}>Payment Method</div>
        <TabsPayment tabs={tabs} setTabs={setTabs} />
        {tabs === 1 && <FormCreditCard />}
        {tabs === 2 && <FormPaypal />}
        {tabs === 3 && <FormCash />}
      </div>
      <div className={style.controls}>
        <MyButton type="outline" onClick={closePaymentWindow}>
          Cancel
        </MyButton>
        <MyButton type="solid" isShadow={true} onClick={addOrder}>
          Confirm Payment
        </MyButton>
      </div>
    </>
  );
};

export default Payment;
