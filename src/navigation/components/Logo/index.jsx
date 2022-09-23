import { NavLink } from 'react-router-dom';
import { ROOT } from 'navigation/CONSTANTS';
import { ReactComponent as ILogo } from 'assets/icons/logo.svg';
import cl from './style.module.scss';

const Logo = () => {
  return (
    <NavLink to={ROOT} className={cl.logo}>
      <ILogo width="40" height="40" className={cl.svg} />
    </NavLink>
  );
};
export { Logo };
