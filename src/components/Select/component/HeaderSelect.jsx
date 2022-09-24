import React from 'react';
import { ReactComponent as Arrow } from 'assets/icons/Arrow-ios-down.svg';
import cl from '../style.module.scss';

export const HeaderSelect = (props) => {
  const { acvItem = { id: null }, classRoot, handleSelectBody } = props;
  return (
    <div className={classRoot} onClick={handleSelectBody}>
      <Arrow width="20" height="20" className={cl.icon} />
      <span className={cl.current} value={acvItem.id}>
        {acvItem.caption}
      </span>
    </div>
  );
};
