import React from 'react';
import { DishCard } from '..';
import cl from './style.module.scss';

export const ListDishesView = (props) => {
  const { listDishes, handleClickItem } = props;
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
