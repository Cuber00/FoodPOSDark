import { ReactComponent as ILogout } from 'assets/icons/LogOut.svg';
import cl from './style.module.scss';

export const LogoutView = (props) => {
  return (
    <div className={cl.root}>
      <div className={cl.content} onClick={props.handleLogout}>
        <ILogout fill="inherit" />
      </div>
    </div>
  );
};
