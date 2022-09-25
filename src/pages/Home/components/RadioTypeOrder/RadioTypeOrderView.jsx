import { RadioTabs } from 'components';
import React from 'react';
import cl from './style.module.scss';
export const RadioTypeOrderView = (props) => {
  const { activeId, listTypeOrder, handleRadioOrder } = props;

  return (
    <div className={cl.root}>
      {listTypeOrder.map((i) => (
        <RadioTabs
          activeId={activeId}
          id={i.id}
          name="typeOrder"
          key={i.id}
          onChange={handleRadioOrder}>
          {i.caption}
        </RadioTabs>
      ))}
    </div>
  );
};
