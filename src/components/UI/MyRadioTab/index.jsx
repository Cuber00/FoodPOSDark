import React, { useId, useState } from 'react';
import style from './style.module.scss';
const MyRadioTab = ({ id, name, text }) => {
  const idInput = useId();
  const [radioValue, setRadioValue] = useState(1);

  const handleRadioInput = () => {
    setRadioValue(id);
  };
  return (
    <>
      <input
        className={style.input}
        type="radio"
        id={idInput}
        name={name}
        defaultChecked={radioValue === id ? true : false}
      />
      <label className={style.label} htmlFor={idInput} onClick={handleRadioInput}>
        {text}
      </label>
    </>
  );
};

export default MyRadioTab;
