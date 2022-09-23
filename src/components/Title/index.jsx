import React from 'react';
import cl from './style.module.scss';
import PropTypes from 'prop-types';

export const Title = (props) => {
  const classRoot = `${cl[props.type]} ${cl[props.color]} ${props.className}`;
  return <div className={classRoot}>{props.children}</div>;
};

Title.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['h1', 'h2']),
  color: PropTypes.oneOf(['dark', 'gray', 'light', 'white']),
  className: PropTypes.string,
};
Title.defaultProps = {
  children: 'The text for the Title component is not set',
  type: 'h2',
  color: 'white',
  className: '',
};
