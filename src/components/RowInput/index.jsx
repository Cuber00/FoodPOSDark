import { Input, Typography } from 'components';
import React from 'react';
import cl from './style.module.scss';

export const RowInput = (props) => {
  return (
    <div className={cl.row}>
      <Typography>{props.title}</Typography>
      <Input
        placeholder={props.placeholder}
        onChanges={props.onChanges}
        value={props.value}
        hookform={props.hookform}
        type={props.type}
        aria-invalid={props.aria_invalid}
      />
      {props.errors[props.hookform.name] && (
        <Typography type="small" color="error">
          {props.errors[props.hookform.name]?.message}
        </Typography>
      )}
    </div>
  );
};
