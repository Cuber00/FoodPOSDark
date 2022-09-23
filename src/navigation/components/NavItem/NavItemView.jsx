import { NavLink } from 'react-router-dom';
import cl from './style.module.scss';
import PropTypes from 'prop-types';

export const NavItemView = (props) => {
  const { path, icon, classRoot, onClick } = props;
  return (
    <div className={classRoot} onClick={onClick}>
      <NavLink to={path} className={cl.content}>
        {icon}
      </NavLink>
    </div>
  );
};

NavItemView.propTypes = {
  classRoot: PropTypes.string,
  onClick: PropTypes.func,
  path: PropTypes.string,
  icon: PropTypes.element,
};
