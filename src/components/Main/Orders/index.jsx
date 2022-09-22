import style from './style.module.scss';
import MyButton from '../../UI/MyButton';
import Divider from '../../UI/Divider';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenPaymentWindow } from '../../../redux/slice/orderSl';
import Tabs from './Tabs';
import ListOrderCard from './ListOrderCard';
import TotalPrice from './TotalPrice';

const Orders = ({ idOrder }) => {
  const order = useSelector((state) => state.orderSl.newOrder);
  const styleButton = { width: '100%' };

  const dispatch = useDispatch();
  const openPaymentWindow = () => {
    dispatch(setOpenPaymentWindow(true));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Orders #{idOrder}</div>
      <Tabs />
      <div className={style.header}>
        <div>Item</div>
        <div>Qty</div>
        <div>Price</div>
      </div>
      <Divider />
      <ListOrderCard menu={order.menu} idOrder={order.id} />
      <TotalPrice />
      <MyButton isShadow={true} type="solid" styles={styleButton} onClick={openPaymentWindow}>
        Continue to Payment
      </MyButton>
    </div>
  );
};

export default Orders;
