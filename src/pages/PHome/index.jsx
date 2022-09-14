import React, { useCallback, useEffect, useState } from 'react';
import style from './style.module.scss';
import Categors from '../../components/Main/Content/Categors';
import MyInput from '../../components/UI/MyInput';
import MySelect from '../../components/UI/MySelect';
import DishCard from '../../components/UI/Cards/DishCard';
import ListDishCard from '../../components/Main/Content/ListDishCard';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../redux/slice/dishesSl';
import Orders from '../../components/Main/Orders';
import debounce from 'lodash.debounce';
import PaymentWindow from '../../components/Main/Orders/PaymentWindow';

const PHome = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.dishesSl.searchQuery);
  const [value, setValue] = useState(query);
  const handleSearchQuery = useCallback(
    debounce((query) => dispatch(setSearchQuery(query)), 700),
    [],
  );
  const handleInput = (query) => {
    setValue(query);
    handleSearchQuery(query);
  };
  const isShowPaymentWindow = useSelector((state) => state.orderSl.isShowPaymentWindow);
  const isOpenOrder = useSelector((state) => state.orderSl.isOpenWindow);
  return (
    <div className={style.wrapper}>
      <div className={style.contentWrapper}>
        <div className={style.header}>
          <div className={style.text}>
            <div className={style.title}>Jaegar Resto</div>
            <div className={style.date}>Tuesday, 2 Feb 2021</div>
          </div>
          <MyInput
            placeholder="Search for food, coffe, etc.."
            isShowIconSearch={true}
            onChanges={handleInput}
            value={value}
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
      {isOpenOrder && <Orders />}
      {isShowPaymentWindow && <PaymentWindow />}
    </div>
  );
};

export default PHome;
