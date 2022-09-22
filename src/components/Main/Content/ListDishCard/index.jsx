import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDishes } from '../../../../redux/slice/dishesSl';
import { SERVER_RESPONSE } from '../../../../redux/constants/apiServices';
import ListSkeleton from './ListSkeleton';
import Main from './Main';
import Error from './Error';
import { fetchOrderId } from '../../../../redux/slice/orderSl';
import style from './style.module.scss';

const ListDishCard = () => {
  const { status, activeCategory, activeDeliveryType, searchQuery, idOrder } = useSelector(
    (state) => state.dishesSl,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchDishes({ categorId: activeCategory, dineIn_like: activeDeliveryType, q: searchQuery }),
    );
  }, [activeCategory, activeDeliveryType, searchQuery]);

  useEffect(() => {
    dispatch(fetchOrderId());
  }, [idOrder]);

  switch (status) {
    case SERVER_RESPONSE.pending:
      return <ListSkeleton />;
    case SERVER_RESPONSE.fulfilled:
      return <Main />;
    case SERVER_RESPONSE.rejected:
      return <Error />;
    default:
      return (
        <div className={style.items}>
          The status of the request status to the server does not match the patterns
        </div>
      );
  }
};

export default ListDishCard;
