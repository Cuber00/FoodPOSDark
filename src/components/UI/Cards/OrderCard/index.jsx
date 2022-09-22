import MyButton from '../../MyButton';
import MyInput from '../../MyInput';
import style from './style.module.scss';
import { convertAppearancePrice } from '../../../../scripts/convertAppearancePrice';
import { ReactComponent as ITrash } from '../../../../assets/icons/Trash.svg';
import { useDispatch, useSelector } from 'react-redux';
import { handleCountItem, setNotes } from '../../../../redux/slice/orderSl';

const OrderCard = ({ id, title, image, price, count, idOrder }) => {
  const parsedTitle = title.length > 20 ? `${title.slice(0, 18)}...` : title;
  const parsedPrice = convertAppearancePrice(price);
  const totalPrice = convertAppearancePrice(price * count);

  const valueNotes = useSelector((state) => state.orderSl.newOrder.menu).filter(
    (i) => i.id === id,
  )[0].notes;

  const dispatch = useDispatch();
  const handleButton = (type) => {
    dispatch(handleCountItem({ id, type }));
  };
  const setValueNotes = (value) => {
    dispatch(setNotes({ idOrder, id, value }));
  };

  return (
    <div className={style.wrapper}>
      <div className={style.row}>
        <div className={style.wrapContent}>
          <div className={style.content}>
            <img className={style.image} src={image} alt="" />
            <div className={style.text}>
              <div className={style.title}>{parsedTitle}</div>
              <div className={style.price}>{parsedPrice}</div>
            </div>
          </div>
          <button className={style.btnAdd} onClick={() => handleButton('increment')}>
            {count}
          </button>
        </div>
        <div className={style.totalPrice}>{totalPrice}</div>
      </div>
      <div className={style.row}>
        <MyInput placeholder="Order Note..." value={valueNotes} onChanges={setValueNotes} />
        <MyButton
          type="outline"
          onClick={() => handleButton('decrement')}
          icon={<ITrash fill="inherit" stroke="none" width="20" height="20" />}
        />
      </div>
    </div>
  );
};

export default OrderCard;
