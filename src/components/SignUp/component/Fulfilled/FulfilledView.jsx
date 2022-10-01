import React from 'react';
import cl from './style.module.scss';
import { ReactComponent as ICheck } from 'assets/icons/CheckMark.svg';
import { Typography } from 'components';
export const FulfilledView = (props) => {
  setTimeout(() => {
    props.navigateHome();
  }, 2000);
  return (
    <div className={cl.root}>
      <div className={cl.icon}>
        <ICheck className={cl.svg} />
      </div>
      <Typography type="large" style={{ color: 'var(--clr-accent-green)' }}>
        Пользователь был создан
      </Typography>
      {/* <Typography style={{ textAlign: 'center' }}>
        Вас автоматически перенаправит на форму авторизации или нажмите{' '}
        <span className={cl.link}>сюда</span>
      </Typography> */}
    </div>
  );
};
