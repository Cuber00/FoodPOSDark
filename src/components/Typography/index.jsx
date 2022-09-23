import React from 'react';
import cl from './style.module.scss';
import PropTypes from 'prop-types';

export const Typography = (props) => {
  const classRoot = `${cl[props.type]} ${cl[props.weight]} ${cl[props.color]} ${props.className}`;
  return <div className={classRoot}>{props.children}</div>;
};

Typography.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['large', 'normall', 'small']),
  weight: PropTypes.oneOf(['semibold', 'medium', 'regular']),
  color: PropTypes.oneOf(['dark', 'gray', 'ligth', 'white']),
  className: PropTypes.string,
};
Typography.defaultProps = {
  children: 'Typography Text',
  type: 'normall',
  weight: 'medium',
  color: 'white',
  className: '',
};
