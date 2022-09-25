import React from 'react';
import { SelectView } from './SelectView';

export const SelectContainer = (props) => {
  const { activeId, optionsArray, handleSelect } = props;

  return <SelectView activeId={activeId} optionsArray={optionsArray} handleSelect={handleSelect} />;
};
