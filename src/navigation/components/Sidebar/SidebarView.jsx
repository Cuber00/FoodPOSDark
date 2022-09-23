import React from 'react';
import cl from './style.module.scss';
import PropTypes from 'prop-types';
import { Logout, NavItem, Logo } from 'navigation/components';

export const SidebarView = (props) => {
  return (
    <div className={cl.wrapper}>
      <Logo />
      {props.categor.map((i) => (
        <NavItem id={i.id} path={i.path} title={i.title} icon={i.icon} key={i.id} />
      ))}
      <Logout />
    </div>
  );
};
SidebarView.propTypes = {
  categor: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      path: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.element,
    }),
  ),
};
