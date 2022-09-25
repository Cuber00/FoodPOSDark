import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTypeOrder, typeOrder, idTypeOrderSelector } from 'redux/slice/dishes/dishes.slice';
import { RadioTypeOrderView } from './RadioTypeOrderView';

export const RadioTypeOrderContainer = () => {
  const listTypeOrder = useSelector(typeOrder);
  const idActiveOrderType = useSelector(idTypeOrderSelector);
  const dispatch = useDispatch();

  const handleRadioOrder = (id) => {
    dispatch(setTypeOrder(id));
  };

  if (listTypeOrder)
    return (
      <RadioTypeOrderView
        activeId={idActiveOrderType}
        listTypeOrder={listTypeOrder}
        handleRadioOrder={handleRadioOrder}
      />
    );
};
