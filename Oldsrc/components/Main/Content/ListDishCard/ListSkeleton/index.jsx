import React from 'react';
import Skeleton from '../../../../UI/Cards/DishCard/Skeleton';
import style from '../style.module.scss';
const ListSkeleton = () => {
  return (
    <div className={style.items}>
      {Array.apply(null, { length: 10 }).map((_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};

export default ListSkeleton;
