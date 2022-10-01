import React from 'react';
import cl from './style.module.scss';
import { ReactComponent as ICheckMark } from 'assets/icons/CheckMark.svg';
import { Typography } from 'components';
export const InputRadio = (props) => {
  const [check, setCheck] = React.useState(false);
  const idChecbox = React.useId();
  return (
    <div className={cl.root}>
      <div className={cl.checkbox}>
        <input
          checked={check}
          onClick={() => setCheck(!check)}
          className={cl.input}
          type="checkbox"
          id={idChecbox}
          {...props.hookform}
        />
        <label className={cl.label} htmlFor={idChecbox}>
          <ICheckMark className={cl.checkMark} />
        </label>
        <label htmlFor={idChecbox}>
          <span>{props.children}</span>
        </label>
      </div>
      {props.errors[props.hookform.name] && (
        <Typography type="small" color="error">
          {props.errors[props.hookform.name]?.message}
        </Typography>
      )}
    </div>
  );
};
