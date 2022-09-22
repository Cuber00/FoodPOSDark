import React from 'react';
import OrderCard from '../../../UI/Cards/OrderCard';
import style from '../style.module.scss';

const ListOrderCard = ({ menu, idOrder }) => {
  return (
    <div className={style.content}>
      {menu.map((i) => (
        <OrderCard
          id={i.id}
          title={i.title}
          image={i.image}
          price={i.price}
          count={i.count}
          idOrder={idOrder}
          key={i.id}
        />
      ))}
    </div>
  );
};

export default ListOrderCard;
