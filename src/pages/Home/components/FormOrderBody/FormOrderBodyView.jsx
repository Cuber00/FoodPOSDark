import React from 'react';
import { OrderCard } from 'pages/Home/components';
import cl from './style.module.scss';

export const FormOrderBodyView = (props) => {
  const { dishes } = props;

  return (
    <div className={cl.body}>
      {dishes.map((i) => (
        <OrderCard {...i} key={i.dishesId} />
      ))}
    </div>
  );
};
