import React from 'react';
import cl from './style.module.scss';
import PropTypes from 'prop-types';

export const Input = (props) => {
  const { type, placeholder, onChanges, value } = props;
  const inputId = React.useId();
  const [valueInput, setValueInput] = React.useState(value);
  const handleValue = (newValue) => {
    onChanges(newValue);
    setValueInput(newValue);
  };
  return (
    <input
      id={inputId}
      className={`${cl.input}`}
      type={type}
      value={valueInput}
      onChange={(e) => handleValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChanges: PropTypes.func,
  value: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  placeholder: 'Placeholder',
  onChanges: () => {},
  value: '',
};
