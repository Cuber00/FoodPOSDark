import React, { useState } from 'react';
import Divider from '../../../../UI/Divider';
import MyButton from '../../../../UI/MyButton';
import TabsPayment from '../../../../UI/Tabs/TabsPayment';
import FormCash from './FormCash';
import FormCreditCard from './FormCreditCard';
import FormPaypal from './FormPaypal';
import style from './style.module.scss';
const Payment = ({ closePaymentWindow }) => {
  const [tabs, setTabs] = useState(1);
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
        <MyButton type="solid" isShadow={true}>
          Confirm Payment
        </MyButton>
      </div>
    </>
  );
};

export default Payment;
