import React from 'react';
import cl from './style.module.scss';
import PropTypes from 'prop-types';

export const Typography = (props) => {
  const classRoot = `${cl[props.type]} ${cl[props.weight]} ${cl[props.color]} ${props.className}`;
  return (
    <div className={classRoot} onClick={props.onClick} style={props.style}>
      {props.children}
    </div>
  );
};

Typography.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['large', 'normall', 'small']),
  weight: PropTypes.oneOf(['semibold', 'medium', 'regular']),
  color: PropTypes.oneOf(['dark', 'gray', 'ligth', 'white', 'error']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};
Typography.defaultProps = {
  children: 'Typography Text',
  type: 'normall',
  weight: 'medium',
  color: 'white',
  style: {},
  className: '',
  onClick: () => {},
};
