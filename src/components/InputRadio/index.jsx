import React from 'react';
import cl from './style.module.scss';
import { ReactComponent as ICheckMark } from 'assets/icons/CheckMark.svg';
export const InputRadio = (props) => {
  const idChecbox = React.useId();
  return (
    <div className={cl.root}>
      <input className={cl.input} type="checkbox" id={idChecbox} />
      <label className={cl.label} htmlFor={idChecbox}>
        <ICheckMark className={cl.checkMark} />
      </label>
      <label htmlFor={idChecbox}>
        <span>{props.children}</span>
      </label>
    </div>
  );
};
