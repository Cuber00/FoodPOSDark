import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idActiveCategor } from 'redux/slice/categor/categor.slice';
import { dishes, idTypeOrderSelector, searchQuerySelector } from 'redux/slice/dishes/dishes.slice';
import { fetchDishes } from 'redux/slice/dishes/dishesAPI';
import { DishCard } from '..';
import cl from './style.module.scss';

export const ListDishesContainer = () => {
  const dispatch = useDispatch();
  const listDishes = useSelector(dishes);
  const activeCategor = useSelector(idActiveCategor);
  const idTypeOrder = useSelector(idTypeOrderSelector);
  const searchQuery = useSelector(searchQuerySelector);

  React.useEffect(() => {
    dispatch(
      fetchDishes({ categorId: activeCategor, typeOrder_like: idTypeOrder, q: searchQuery }),
    );
  }, [activeCategor, idTypeOrder, searchQuery]);

  const handleClickItem = () => {};
  return (
    <div className={cl.content}>
      {listDishes ? (
        listDishes.map((i) => <DishCard {...i} key={i.id} handleClickItem={handleClickItem} />)
      ) : (
        <h1>Загрузка</h1>
      )}
    </div>
  );
};
