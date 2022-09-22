import React from 'react';
import MyRadioTab from '../../../UI/MyRadioTab';
import style from '../style.module.scss';

const Tabs = () => {
  return (
    <div className={style.tabs}>
      <MyRadioTab id={1} text="Dine In" name="orderTabs" />
      <MyRadioTab id={2} text="To Go" name="orderTabs" />
      <MyRadioTab id={3} text="Delivery" name="orderTabs" />
    </div>
  );
};

export default React.memo(Tabs);
