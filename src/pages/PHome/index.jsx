import React, { useEffect } from 'react';
import style from './style.module.scss';
import Categors from '../../components/Main/Content/Categors';
import MyInput from '../../components/UI/MyInput';
import MySelect from '../../components/UI/MySelect';
import DishCard from '../../components/UI/Cards/DishCard';
import ListDishCard from '../../components/Main/Content/ListDishCard';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/slice/dishesSl';

const PHome = () => {
  const dispatch = useDispatch();
  const handleSearchQuery = (query) => {
    dispatch(setSearchQuery(query));
  };

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
          onChanges={handleSearchQuery}
          styles={{ maxWidth: '220px', width: '100%' }}
        />
      </div>
      <Categors />
      <div className={style.content}>
        <div className={style.top}>
          <div className={style.contentTitle}>Choose Dishes</div>
          <MySelect />
        </div>
        <ListDishCard />
      </div>
    </div>
  );
};

export default PHome;
