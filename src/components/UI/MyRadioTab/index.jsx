import React, { useId } from 'react';
import style from './style.module.scss';
const MyRadioTab = ({ name, text, checked = false }) => {
  const idInput = useId();
  return (
    <>
      <input className={style.input} type="radio" id={idInput} name={name} checked={checked} />
      <label className={style.label} htmlFor={idInput}>
        {text}
      </label>
    </>
  );
};

export default MyRadioTab;
