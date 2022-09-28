import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idActiveCategor } from 'redux/slice/categor/categor.slice';
import { dishes, idTypeOrderSelector, searchQuerySelector } from 'redux/slice/dishes/dishes.slice';
import { fetchDishes } from 'redux/slice/dishes/dishesAPI';
import { addDishesOrder, isOpenOrderSl, setOpenOrder } from 'redux/slice/order/order.slice';
import { fetchIdNewOrder } from 'redux/slice/order/orderAPI';
import { ListDishesView } from './ListDishesView';

export const ListDishesContainer = () => {
  const dispatch = useDispatch();
  const listDishes = useSelector(dishes);
  const activeCategor = useSelector(idActiveCategor);
  const idTypeOrder = useSelector(idTypeOrderSelector);
  const searchQuery = useSelector(searchQuerySelector);
  const isOpenOrder = useSelector(isOpenOrderSl);

  React.useEffect(() => {
    dispatch(
      fetchDishes({ categorId: activeCategor, typeOrder_like: idTypeOrder, q: searchQuery }),
    );
  }, [activeCategor, idTypeOrder, searchQuery]);

  const handleClickItem = ({ id, image, available, price, title }) => {
    console.log(isOpenOrder);
    if (!isOpenOrder) {
      //dispatch(setOpenOrder(true))
      dispatch(fetchIdNewOrder());
    }
    dispatch(addDishesOrder({ id, image, available, price, title }));
  };
  return <ListDishesView listDishes={listDishes} handleClickItem={handleClickItem} />;
};
