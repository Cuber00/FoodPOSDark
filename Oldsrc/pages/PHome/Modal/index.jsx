import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Login from '../../../components/Main/Login';
import Orders from '../../../components/Main/Orders';
import PaymentWindow from '../../../components/Main/PaymentWindow';

const Modal = () => {
  const { isOpenWindow, isShowPaymentWindow, idOrder } = useSelector((state) => state.orderSl);
  const isOpen = useSelector((state) => state.userSl.isOpen);
  const idOrders = useMemo(() => idOrder, [idOrder]);
  return (
    <>
      {isOpenWindow && <Orders idOrder={idOrders} />}
      {isShowPaymentWindow && <PaymentWindow idOrder={idOrder} />}
      {isOpen && <Login />}
    </>
  );
};

export default Modal;
