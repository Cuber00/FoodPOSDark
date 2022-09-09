import React from 'react';
import style from './style.module.scss';

const MyInput = ({ type = 'text', placeholder = 'Placeholder', isShowIconSearch, styles = '' }) => {
  const [value, setValue] = React.useState('');
  const inputId = React.useId();
  let classInput = '';
  if (isShowIconSearch) {
    classInput = style.search;
    return (
      <label className={style.label} htmlFor={inputId} style={styles}>
        <input
          id={inputId}
          className={`${style.input} ${classInput}`}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      </label>
    );
  }
  return (
    <input
      id={inputId}
      className={`${style.input}`}
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default MyInput;
