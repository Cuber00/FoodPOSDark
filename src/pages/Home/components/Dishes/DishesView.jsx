import React from 'react';
import { Title, Select } from 'components';
import cl from './style.module.scss';
import { DishCard } from 'pages/Home/components';

export const DishesView = (props) => {
  const { dishes, typeOrder, handleSelect } = props;

  const handleClickItem = (id) => {
    console.log(id);
  };
  return (
    <div className={cl.root}>
      <div className={cl.header}>
        <Title type="h2">Choose Dishes</Title>
        {typeOrder && <Select optionsArray={typeOrder} handleSelect={handleSelect} />}
      </div>
      <div className={cl.content}>
        {dishes ? (
          dishes.map((i) => <DishCard {...i} key={i.id} handleClickItem={handleClickItem} />)
        ) : (
          <h1>Отсутвует</h1>
        )}
      </div>
    </div>
  );
};
