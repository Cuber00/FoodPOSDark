import React, { useEffect } from 'react';
import style from './style.module.scss';
import Status from '../../../components/UI/Tabs/Status';
import Row from './Row';
import Divider from '../../../components/UI/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderList } from '../../../redux/slice/orderSl';
const OrderReport = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.orderSl);
  useEffect(() => {
    dispatch(fetchOrderList());
  }, [dispatch]);

  console.log();
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.title}>Order Report</div>
        <div className={style.filter}>Filter Order</div>
      </div>
      <div className={style.table}>
        <div className={style.head}>
          <span>Customer</span>
          <span>Menu</span>
          <span>Total Payment</span>
          <span>Status</span>
        </div>
        <Divider className={style.divider} />
        <div className={style.body}>
          {orderState.order.map((i) => (
            <Row {...i} key={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderReport;
