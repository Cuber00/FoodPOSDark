import { ReactComponent as ILogout } from 'assets/icons/LogOut.svg';
import cl from './style.module.scss';

export const LogoutView = () => {
  return (
    <div className={cl.root}>
      <div className={cl.content}>
        <ILogout fill="inherit" />
      </div>
    </div>
  );
};
