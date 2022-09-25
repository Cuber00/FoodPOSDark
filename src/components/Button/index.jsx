import React from 'react';
import cl from './style.module.scss';

export const Button = ({ styles, type, isShadow = false, children, icon = null, onClick, ref }) => {
  const classButton = isShadow ? cl[type] + ' ' + cl.shadow : cl[type];
  return (
    <button style={styles} className={`${cl.button} ${classButton}`} onClick={onClick} ref={ref}>
      {icon !== null && icon}
      {children}
    </button>
  );
};
