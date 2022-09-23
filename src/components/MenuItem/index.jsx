import React from 'react';
import cl from './style.module.scss';

export const MenuItem = (props) => {
  const itemRef = React.useRef(null);
  const { id, active, handleActiveItem, setMarginLeft } = props;
  const classRoot = active ? `${cl.item} ${cl.active}` : cl.item;

  const handleClickItem = () => {
    handleActiveItem(id);
    if (itemRef.current !== null) setMarginLeft(itemRef.current.offsetLeft - 1.5);
  };

  return (
    <div className={classRoot} onClick={handleClickItem} ref={itemRef}>
      {props.children}
    </div>
  );
};
