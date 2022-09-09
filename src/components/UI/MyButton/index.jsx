import React from 'react';
import style from './style.module.scss';
import { ReactComponent as Add } from '../../../assets/icons/Add.svg';

const MyButton = ({ type, isShowIcon, isShadow, children, icon = null, onClick, ref }) => {
  let classButton = '';
  if (type === 'solid') classButton = style.solid;
  else if (type === 'outline') classButton = style.outline;
  if (isShadow) {
    classButton += ` ${style.shadow}`;
  }
  return (
    <button className={`${style.button} ${classButton}`} onClick={onClick} ref={ref}>
      {isShowIcon && <Add />}
      {icon !== null && icon}
      {children}
    </button>
  );
};

export default MyButton;
