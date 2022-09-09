import React, { useState } from 'react';
import TabsCategor from '../../../UI/Tabs/TabsCategor';
import style from './style.module.scss';
const Categors = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [lineLeft, setLineLeft] = useState(-1.5);
  const data = [
    { id: 1, title: 'Hot Dishes' },
    { id: 2, title: 'Cold Dishes' },
    { id: 3, title: 'Soup' },
    { id: 4, title: 'Grill' },
    { id: 5, title: 'Appetizer' },
    { id: 6, title: 'Dessert' },
  ];

  return (
    <div className={style.wrapper}>
      {data.map((i) => (
        <TabsCategor
          key={i.id}
          active={activeCategory === i.id ? true : false}
          checkItem={() => setActiveCategory(i.id)}
          setLineLeft={setLineLeft}>
          {i.title}
        </TabsCategor>
      ))}
      <div className={style.line} style={{ left: `${lineLeft}px` }}></div>
    </div>
  );
};

export default Categors;
