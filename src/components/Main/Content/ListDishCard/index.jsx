import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../../../redux/slice/dishesSl';
import DishCard from '../../../UI/Cards/DishCard';
import Skeleton from '../../../UI/Cards/DishCard/Skeleton';
import style from './style.module.scss';

import { ReactComponent as IError } from '../../../../assets/icons/Error.svg';
import { SERVER_RESPONSE } from '../../../../redux/constants/apiServices';
const ListDishCard = () => {
  let { dishesList, error, status, activeCategory, activeDeliveryType, searchQuery } = useSelector(
    (state) => state.dishesSl,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchDishes({ categorId: activeCategory, dineIn_like: activeDeliveryType, q: searchQuery }),
    );
  }, [activeCategory, activeDeliveryType, searchQuery]);

  switch (status) {
    case SERVER_RESPONSE.pending:
      return (
        <div className={style.items}>
          {Array.apply(null, { length: 10 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      );
    case SERVER_RESPONSE.fulfilled:
      return (
        <div className={style.items}>
          {dishesList.length > 0 ? (
            dishesList.map((i) => <DishCard {...i} key={i.id} />)
          ) : (
            <>В данной категории остутвуют блюда</>
          )}
        </div>
      );
    case SERVER_RESPONSE.rejected:
      return (
        <div className={style.items}>
          <div className={style.error}>
            <IError fill="inherit" />
            {error}
          </div>
        </div>
      );
    default:
      return <div className={style.items}>Error </div>;
  }
};

export default ListDishCard;
