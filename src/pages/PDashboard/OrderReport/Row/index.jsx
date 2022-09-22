import React from 'react';
import Status from '../../../../components/UI/Tabs/Status';
import cl from '../style.module.scss';
import style from './style.module.scss';
const Row = (props) => {
  const { username, totalPayment, id, menu, status } = props;
  return (
    <div className={cl.row + ' ' + style.wrapper}>
      <div className={style.col}>
        <img className={style.avatar} src="/assets/avatar/1.jpg" alt="" />
        <span>{username}</span>
      </div>
      <div
        className={style.col}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
        {menu.map((i) => (
          <span key={i.id}>
            {i.title}
            <span> x{i.count}</span>
          </span>
        ))}
      </div>
      <div className={style.col}>$ {totalPayment}</div>
      <div className={style.col}>
        {status === 'pending' && <Status type="pending" />}
        {status === 'completed' && <Status type="completed" />}
        {status === 'preparing' && <Status type="preparing" />}
      </div>
    </div>
  );
};

export default Row;
