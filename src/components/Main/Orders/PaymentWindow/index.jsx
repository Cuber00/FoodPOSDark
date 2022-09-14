import React from 'react';
import style from './style.module.scss';
import Confirmation from './Confirmation';
import Payment from './Payment';
import { useDispatch } from 'react-redux';
import { toggleShowPaymentWindow } from '../../../../redux/slice/orderSl';
const PaymentWindow = () => {
  const dispatch = useDispatch();
  const closePaymentWindow = () => {
    dispatch(toggleShowPaymentWindow(false));
  };
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.col}>
          <Confirmation closePaymentWindow={closePaymentWindow} />
        </div>
        <div className={style.dividerH}></div>
        <div className={style.col}>
          <Payment closePaymentWindow={closePaymentWindow} />
        </div>
      </div>
    </div>
  );
};

export default PaymentWindow;
