import React from 'react';
import MyButton from '../../../../UI/MyButton';
import style from '../style.module.scss';
const Header = ({ idOrder, title, closePaymentWindow }) => {
  return (
    <div className={style.header}>
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.desc}>Orders #{idOrder}</div>
      </div>
      <MyButton type="solid" isShowIcon={true} onClick={closePaymentWindow} />
    </div>
  );
};

export default React.memo(Header);
