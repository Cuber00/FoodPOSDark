import { Typography } from 'components';
import React from 'react';
import cl from './style.module.scss';
import { ReactComponent as IError } from 'assets/icons/Error.svg';
import { useSelector } from 'react-redux';
import { registerErrorSl } from 'redux/slice/user/user.slice';
export const Rejected = () => {
  const error = useSelector(registerErrorSl);
  return (
    <div className={cl.root}>
      <IError className={cl.svg} />
      <div className={cl.text}>
        <Typography type="large" style={{ color: 'var(--clr-accent-red)' }}>
          При регистрации произошла ошибка
        </Typography>
        <Typography>{error}</Typography>
        <Typography>Попробуйте зарегистрироваться позже</Typography>
      </div>
    </div>
  );
};
