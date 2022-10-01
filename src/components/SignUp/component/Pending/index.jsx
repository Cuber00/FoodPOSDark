import React from 'react';
import { ReactComponent as ILoading } from 'assets/icons/Loading.svg';
import cl from './style.module.scss';
export const Pending = () => {
  return (
    <div className={cl.root}>
      <ILoading className={cl.icon} />
    </div>
  );
};
