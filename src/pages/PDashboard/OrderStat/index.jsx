import React from 'react';
import SummaryCard from '../../../components/UI/Cards/SummaryCard';
import { convertAppearancePrice } from '../../../scripts/convertAppearancePrice';
import style from './style.module.scss';
const OrderStat = () => {
  return (
    <div className={style.wrapper}>
      <SummaryCard
        icon="Coin.svg"
        growth={32.4}
        summaryCount={`$ ${convertAppearancePrice(10243)}`}
        title="Total Revenue"
      />
      <SummaryCard
        icon="Bookmark.svg"
        growth={-12.4}
        summaryCount={'23,456'}
        title="Total Dish Ordered"
      />
      <SummaryCard icon="User.svg" growth={2.4} summaryCount={'1,234'} title="Total Customer" />
    </div>
  );
};

export default OrderStat;
