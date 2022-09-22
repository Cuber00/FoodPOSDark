import style from './style.module.scss';
import Confirmation from './Confirmation';
import Payment from './Payment';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenPaymentWindow } from '../../../redux/slice/orderSl';
import { useCallback } from 'react';

const PaymentWindow = ({ idOrder }) => {
  const isShowPaymentWindow = useSelector((state) => state.orderSl.isShowPaymentWindow);
  const dispatch = useDispatch();
  const memoizedClosePayment = useCallback(() => closePaymentWindow(), [isShowPaymentWindow]);
  const closePaymentWindow = () => {
    dispatch(setOpenPaymentWindow(false));
  };
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.col}>
          <Confirmation closePaymentWindow={memoizedClosePayment} idOrder={idOrder} />
        </div>
        <div className={style.dividerH}></div>
        <div className={style.col}>
          <Payment closePaymentWindow={memoizedClosePayment} />
        </div>
      </div>
    </div>
  );
};

export default PaymentWindow;
