import React from 'react';
import { ReactComponent as ILogout } from '../../../../assets/icons/LogOut.svg';
import style from './style.module.scss';
const Logout = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <ILogout className={style.logout} fill="inherit" />
      </div>
    </div>
  );
};

export default Logout;
