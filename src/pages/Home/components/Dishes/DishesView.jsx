import React from 'react';
import { Title, Select } from 'components';
import cl from './style.module.scss';
import { DishCard } from 'pages/Home/components';
export const DishesView = () => {
  const optionsArray = [
    { id: 0, title: 'Dine In' },
    { id: 1, title: 'To Go' },
    { id: 2, title: 'Delivery' },
    { id: 3, title: 'Item 4' },
    { id: 4, title: 'Item 5' },
  ];
  const dishes = [
    {
      id: 1,
      categorId: 1,
      totalOrdered: {
        byDays: 0,
        byMonth: 0,
        byYear: 0,
      },
      dineIn: [1, 2, 3],
      title: 'Spicy seasoned seafood noodles',
      price: 2.29,
      available: 15,
      image: 'http://localhost:3000/assets/images/1.png',
    },
    {
      id: 2,
      categorId: 1,
      totalOrdered: {
        byDays: 0,
        byMonth: 0,
        byYear: 0,
      },
      dineIn: [1, 2, 3],
      title: 'Salted Pasta with mushroom sauce',
      price: 2.69,
      available: 11,
      image: 'http://localhost:3000/assets/images/2.png',
    },
  ];
  const handleSelect = () => {
    console.log('1');
  };
  const handleClickItem = (id) => {
    console.log(id);
  };
  return (
    <div className={cl.root}>
      <div className={cl.header}>
        <Title type="h2">Choose Dishes</Title>
        <Select optionsArray={optionsArray} handleSelect={handleSelect} />
      </div>
      <div className={cl.content}>
        {dishes.map((i) => (
          <DishCard {...i} key={i.id} handleClickItem={handleClickItem} />
        ))}
      </div>
    </div>
  );
};
