import React, { useState } from 'react';
import MyInput from '../../../../UI/MyInput';

import style from './style.module.scss';
const Block = ({ title, placeholder }) => {
  const [value, setValue] = useState('');
  const onChanges = (e) => {
    setValue(e);
  };
  return (
    <div className={style.block}>
      {title}
      <MyInput placeholder={placeholder} value={value} onChanges={onChanges} />
    </div>
  );
};

export default Block;
