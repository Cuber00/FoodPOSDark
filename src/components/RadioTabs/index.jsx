import React from 'react';
import style from './style.module.scss';

export const RadioTabs = ({ activeId, id, name, children, onChange }) => {
  const idInput = React.useId();

  const handleRadioInput = () => {
    onChange(id);
  };
  return (
    <>
      <input
        className={style.input}
        type="radio"
        id={idInput}
        name={name}
        checked={activeId === id ? true : false}
        onChange={handleRadioInput}
      />
      <label className={style.label} htmlFor={idInput}>
        {children}
      </label>
    </>
  );
};
