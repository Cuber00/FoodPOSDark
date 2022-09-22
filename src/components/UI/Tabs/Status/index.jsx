import React from 'react';
import style from './style.module.scss';
const Status = ({ type = 'pending' }) => {
  return <div className={`${style.root} ${style[type]}`}>{type}</div>;
};

export default Status;
