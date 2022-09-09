import React, { useRef } from 'react';
import style from './style.module.scss';

const TabsCategor = ({ children, active = false, checkItem, setLineLeft }) => {
  const itemRef = useRef(null);
  const classItem = active ? `${style.item} ${style.active}` : style.item;

  const handleClickItem = () => {
    checkItem();
    if (itemRef.current !== null) setLineLeft(itemRef.current.offsetLeft - 1.5);
  };

  return (
    <div className={classItem} onClick={handleClickItem} ref={itemRef}>
      <span>{children}</span>
    </div>
  );
};

export default TabsCategor;
