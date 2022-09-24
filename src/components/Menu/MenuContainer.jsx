import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategor } from 'redux/slice/categor/categorAPI';
import { allCategor, idActiveCategor, setActiveCategor } from 'redux/slice/categor/categor.slice';
import { MenuView } from './MenuView';

export const MenuContainer = () => {
  const categories = useSelector(allCategor);
  const activeCategors = useSelector(idActiveCategor);
  const [activeItem, setActiveItem] = React.useState(activeCategors !== null ? activeCategors : 1);
  const [marginLeft, setMarginLeft] = React.useState(-1.5);
  const styleLineLeft = { left: `${marginLeft}px` };

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCategor());
  }, []);

  const handleActiveItem = (id) => {
    setActiveItem(id);
    dispatch(setActiveCategor(id));
  };

  if (!!categories) {
    return (
      <MenuView
        categories={categories}
        activeItem={activeItem}
        styleLineLeft={styleLineLeft}
        handleActiveItem={handleActiveItem}
        setMarginLeft={setMarginLeft}
      />
    );
  }
};
