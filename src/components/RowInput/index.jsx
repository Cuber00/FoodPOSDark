import { Input, Typography } from 'components';
import React from 'react';
import cl from './style.module.scss';
export const RowInput = (props) => {
  return (
    <div className={cl.row}>
      <Typography>{props.title}</Typography>
      <Input placeholder={props.placeholder} onChanges={props.onChanges} value={props.value} />
    </div>
  );
};
