import React from 'react';
import { MenuView } from './MenuView';

export const MenuContainer = () => {
  const categories = [
    {
      id: 1,
      caption: 'Hot Dishes',
    },
    {
      id: 2,
      caption: 'Cold Dishes',
    },
    {
      id: 3,
      caption: 'Soup',
    },
    {
      id: 4,
      caption: 'Grill',
    },
    {
      id: 5,
      caption: 'Dessert',
    },
    {
      id: 6,
      caption: 'Appetizer',
    },
  ];

  const [activeItem, setActiveItem] = React.useState(1);
  const handleActiveItem = (id) => {
    setActiveItem(id);
  };
  const [marginLeft, setMarginLeft] = React.useState(-1.5);
  const styleLineLeft = { left: `${marginLeft}px` };
  return (
    <MenuView
      categories={categories}
      activeItem={activeItem}
      styleLineLeft={styleLineLeft}
      handleActiveItem={handleActiveItem}
      setMarginLeft={setMarginLeft}
    />
  );
};
