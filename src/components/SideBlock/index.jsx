import React from 'react';
import cl from './style.module.scss';
import PropTypes from 'prop-types';

export const SideBlock = (props) => {
  return <div className={cl.root + props.className}>{props.children}</div>;
};
SideBlock.propTypes = {
  className: PropTypes.string,
};
SideBlock.defaultProps = {
  className: '',
};
