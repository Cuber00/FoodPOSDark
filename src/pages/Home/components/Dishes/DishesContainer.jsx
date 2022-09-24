import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  dishes,
  typeOrder,
  setTypeOrder,
  idTypeOrderSelector,
  searchQuerySelector,
} from 'redux/slice/dishes/dishes.slice';

import { fetchDishes, fetchTypeOrder } from 'redux/slice/dishes/dishesAPI';
import { idActiveCategor } from 'redux/slice/categor/categor.slice';
import { DishesView } from './DishesView';

export const DishesContainer = () => {
  const dispatch = useDispatch();
  const listDishes = useSelector(dishes);
  const listTypeOrder = useSelector(typeOrder);
  const activeCategor = useSelector(idActiveCategor);
  const idTypeOrder = useSelector(idTypeOrderSelector);
  const searchQuery = useSelector(searchQuerySelector);

  React.useEffect(() => {
    dispatch(fetchTypeOrder());
    dispatch(
      fetchDishes({ categorId: activeCategor, typeOrder_like: idTypeOrder, q: searchQuery }),
    );
  }, [activeCategor, idTypeOrder, searchQuery]);

  const handleSelect = (id) => {
    dispatch(setTypeOrder(id));
  };

  return <DishesView dishes={listDishes} typeOrder={listTypeOrder} handleSelect={handleSelect} />;
};
