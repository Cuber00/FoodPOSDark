import React from 'react';
import { MenuItem } from 'components';
import cl from './style.module.scss';
export const MenuView = (props) => {
  return (
    <div className={cl.wrapper}>
      {props.categories.map((i) => (
        <MenuItem
          key={i.id}
          id={i.id}
          handleActiveItem={props.handleActiveItem}
          active={props.activeItem === i.id ? true : false}
          setMarginLeft={props.setMarginLeft}>
          {i.caption}
        </MenuItem>
      ))}

      <div className={cl.line} style={props.styleLineLeft}></div>
    </div>
  );
};
