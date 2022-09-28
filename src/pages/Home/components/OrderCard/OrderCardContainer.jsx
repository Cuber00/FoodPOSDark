import React from 'react';
import { useDispatch } from 'react-redux';
import { handleCount } from 'redux/slice/order/order.slice';
import { convertAppearancePrice } from 'utils/convertAppearancePrice';
import { OrderCardView } from './OrderCardView';

export const OrderCardContainer = (props) => {
  const { dishesId, title, image, price, count } = props;
  const parsedTitle = title.length > 20 ? `${title.slice(0, 18)}...` : title;
  const parsedPrice = price;
  const totalPrice = convertAppearancePrice(price * count);

  const dispatch = useDispatch();

  const handleCountDishes = (type) => {
    dispatch(handleCount({ dishesId, type }));
  };

  return (
    <OrderCardView
      id={dishesId}
      title={parsedTitle}
      image={image}
      parsedPrice={parsedPrice}
      totalPrice={totalPrice}
      count={count}
      handleCountDishes={handleCountDishes}
    />
  );
};
