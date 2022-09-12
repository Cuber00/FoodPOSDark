import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../../../redux/slice/dishesSl';
import DishCard from '../../../UI/Cards/DishCard';
import Skeleton from '../../../UI/Cards/DishCard/Skeleton';
import style from './style.module.scss';

import { ReactComponent as IError } from '../../../../assets/icons/Error.svg';
const ListDishCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  let { list, error, status } = useSelector((state) => state.dishesSl);

  switch (status) {
    case 'penging':
      return (
        <div className={style.items}>
          {Array.apply(null, { length: 10 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      );
    case 'fulfilled':
      return (
        <div className={style.items}>
          {list.map((i) => (
            <DishCard {...i} key={i.id} />
          ))}
        </div>
      );
    case 'rejected':
      return (
        <div className={style.items}>
          <div className={style.error}>
            <IError fill="inherit" />
            {error}
          </div>
        </div>
      );
    default:
      return <div className={style.items}>Ошибка ERROR</div>;
      break;
  }
};

export default ListDishCard;
