import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTypeOrder, typeOrder, idTypeOrderSelector } from 'redux/slice/dishes/dishes.slice';
import { fetchTypeOrder } from 'redux/slice/dishes/dishesAPI';
import { SelectTypeOrderView } from './SelectTypeOrderView';

export const SelectTypeOrderContainer = () => {
  const listTypeOrder = useSelector(typeOrder);
  const idActiveOrderType = useSelector(idTypeOrderSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTypeOrder());
  }, []);

  const handleSelect = (id) => {
    dispatch(setTypeOrder(id));
  };
  if (listTypeOrder)
    return (
      <SelectTypeOrderView
        activeId={idActiveOrderType}
        listTypeOrder={listTypeOrder}
        handleSelect={handleSelect}
      />
    );
};
