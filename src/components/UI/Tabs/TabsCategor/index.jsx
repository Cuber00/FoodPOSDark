import React, { useRef } from 'react';
import style from './style.module.scss';

const TabsCategor = ({ children, active, id, chooseTabs, handleLineLeft }) => {
  const itemRef = useRef(null);
  const classItem = active ? `${style.item} ${style.active}` : style.item;
  const handleClickItem = () => {
    chooseTabs(id);
    if (itemRef.current !== null) handleLineLeft(itemRef.current.offsetLeft - 1.5);
  };
  return (
    <div className={classItem} onClick={handleClickItem} ref={itemRef}>
      <span>{children}</span>
    </div>
  );
};

export default TabsCategor;
