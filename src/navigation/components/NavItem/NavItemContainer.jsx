import React from 'react';
import cl from './style.module.scss';
import { useLocation } from 'react-router-dom';
import { NavItemView } from './NavItemView';
import PropTypes from 'prop-types';

export const NavItemContainer = (props) => {
  const { path, title, icon } = props;
  const classRoot =
    useLocation().pathname === props.path ? `${cl.wrapper} ${cl.active}` : cl.wrapper;
  const handleClickItem = () => {};
  return (
    <NavItemView
      path={path}
      title={title}
      icon={icon}
      classRoot={classRoot}
      onClick={handleClickItem}
    />
  );
};
NavItemContainer.propTypes = {
  id: PropTypes.number,
  path: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element,
};
