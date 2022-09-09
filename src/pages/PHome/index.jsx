import React from 'react';
import style from './style.module.scss';
import Categors from '../../components/Main/Content/Categors';
import MyInput from '../../components/UI/MyInput';
import MySelect from '../../components/UI/MySelect';
import DishCard from '../../components/UI/Cards/DishCard';
const PHome = () => {
  const data = [
    {
      id: 1,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2, 3],
      title: 'Spicy seasoned seafood noodles',
      price: 2.29,
      available: 15,
      image: 'http://localhost:3000/assets/images/1.png',
    },
    {
      id: 2,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [2],
      title: 'Salted Pasta with mushroom sauce',
      price: 2.69,
      available: 11,
      image: 'http://localhost:3000/assets/images/2.png',
    },
    {
      id: 3,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [2],
      title: 'Beef dumpling in hot and sour soup',
      price: 2.99,
      available: 16,
      image: 'http://localhost:3000/assets/images/3.png',
    },
    {
      id: 4,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1],
      title: 'Healthy noodle with spinach leaf',
      price: 3.29,
      available: 22,
      image: 'http://localhost:3000/assets/images/4.png',
    },
    {
      id: 5,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2, 3],
      title: 'Hot spicy fried rice with omelet',
      price: 2.49,
      available: 13,
      image: 'http://localhost:3000/assets/images/5.png',
    },
    {
      id: 6,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2, 3],
      title: 'Spicy instant noodle with special omelette',
      price: 3.29,
      available: 17,
      image: 'http://localhost:3000/assets/images/6.png',
    },
    {
      id: 7,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1],
      title: 'Hot spicy fried rice with omelet',
      price: 2.29,
      available: 22,
      image: 'http://localhost:3000/assets/images/7.png',
    },
    {
      id: 8,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2],
      title: 'Spicy instant noodle with special omelette',
      price: 2.29,
      available: 13,
      image: 'http://localhost:3000/assets/images/8.png',
    },
    {
      id: 9,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2],
      title: 'Healthy noodle with spinach leaf',
      price: 2.29,
      available: 17,
      image: 'http://localhost:3000/assets/images/9.png',
    },
    {
      id: 10,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2],
      title: 'Healthy noodle with spinach leaf',
      price: 2.29,
      available: 17,
      image: 'http://localhost:3000/assets/images/9.png',
    },
    {
      id: 11,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2],
      title: 'Healthy noodle with spinach leaf',
      price: 2.29,
      available: 17,
      image: 'http://localhost:3000/assets/images/9.png',
    },
    {
      id: 12,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2],
      title: 'Healthy noodle with spinach leaf',
      price: 2.29,
      available: 17,
      image: 'http://localhost:3000/assets/images/9.png',
    },
    {
      id: 13,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2],
      title: 'Healthy noodle with spinach leaf',
      price: 2.29,
      available: 17,
      image: 'http://localhost:3000/assets/images/9.png',
    },
    {
      id: 14,
      categorId: 1,
      totalOrdered: { byDays: 0, byMonth: 0, byYear: 0 },
      dineIn: [1, 2],
      title: 'Healthy noodle with spinach leaf',
      price: 2.29,
      available: 17,
      image: 'http://localhost:3000/assets/images/9.png',
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.text}>
          <div className={style.title}>Jaegar Resto</div>
          <div className={style.date}>Tuesday, 2 Feb 2021</div>
        </div>
        <MyInput
          placeholder="Search for food, coffe, etc.."
          isShowIconSearch={true}
          styles={{ maxWidth: '220px', width: '100%' }}
        />
      </div>
      <Categors />
      <div className={style.content}>
        <div className={style.top}>
          <div className={style.contentTitle}>Choose Dishes</div>
          <MySelect />
        </div>
        <div className={style.items}>
          {data.map((i) => (
            <DishCard {...i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PHome;
