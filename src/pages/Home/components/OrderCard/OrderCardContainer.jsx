import debounce from 'lodash.debounce';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCount, menuOrderSl, setNotes } from 'redux/slice/order/order.slice';
import { convertAppearancePrice } from 'utils/convertAppearancePrice';
import { OrderCardView } from './OrderCardView';

export const OrderCardContainer = (props) => {
  const { dishesId, title, image, price, count } = props;
  const parsedTitle = title.length > 20 ? `${title.slice(0, 18)}...` : title;
  const parsedPrice = price;
  const totalPrice = convertAppearancePrice(price * count);
  const notes = useSelector(menuOrderSl).filter((i) => i.dishesId === dishesId)[0].notes;

  const dispatch = useDispatch();

  const handleCountDishes = (type) => {
    dispatch(handleCount({ dishesId, type }));
  };
  const handleNotesDishes = React.useCallback(
    debounce((value) => dispatch(setNotes({ dishesId, value })), 700),
    [],
  );

  return (
    <OrderCardView
      id={dishesId}
      title={parsedTitle}
      image={image}
      parsedPrice={parsedPrice}
      totalPrice={totalPrice}
      count={count}
      notes={notes}
      handleCountDishes={handleCountDishes}
      handleNotesDishes={handleNotesDishes}
    />
  );
};
