import React from 'react';
import style from './style.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
const Item = ({ icon, onClick, path }) => {
  const location = useLocation();

  return (
    <div
      className={location.pathname === path ? `${style.wrapper} ${style.active}` : style.wrapper}
      onClick={onClick}>
      <NavLink to={path} className={style.content}>
        {icon}
      </NavLink>
    </div>
  );
};

export default Item;
