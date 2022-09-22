import React from 'react';
import style from './style.module.scss';
import { ReactComponent as IBack } from '../../../../assets/icons/Back.svg';
import { useSelector } from 'react-redux';
import Divider from '../../../UI/Divider';
import OrderCard from '../../../UI/Cards/OrderCard';
import Header from './Header';
import { useTotalPrice } from '../../../../hooks/useTotalPrice';
import TotalPrice from '../../Orders/TotalPrice';

const Confirmation = ({ closePaymentWindow, idOrder }) => {
  const menu = useSelector((state) => state.orderSl.newOrder.menu);

  return (
    <>
      <div onClick={closePaymentWindow} className={style.back}>
        <IBack />
      </div>

      <Header title={'Confirmation'} idOrder={idOrder} closePaymentWindow={closePaymentWindow} />
      <Divider />
      <div className={style.items}>
        {menu.map((i) => (
          <OrderCard {...i} key={i.id} idOrder={idOrder} />
        ))}
      </div>
      <TotalPrice />
    </>
  );
};

export default React.memo(Confirmation);
