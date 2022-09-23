import React from 'react';
import { SelectView } from './SelectView';

export const SelectContainer = (props) => {
  const { optionsArray, handleSelect } = props;
  return <SelectView optionsArray={optionsArray} handleSelect={handleSelect} />;
};
