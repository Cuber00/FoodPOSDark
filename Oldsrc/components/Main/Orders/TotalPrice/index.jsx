import { useTotalPrice } from '../../../../hooks/useTotalPrice';
import style from '../style.module.scss';

const TotalPrice = () => {
  const totalPrice = useTotalPrice();
  return (
    <div className={style.totalData}>
      <div className={style.row}>
        <span>Discount</span>
        <span>$0</span>
      </div>
      <div className={style.row}>
        <span>Sub total</span>
        <span>$ {totalPrice}</span>
      </div>
    </div>
  );
};

export default TotalPrice;
