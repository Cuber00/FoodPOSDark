import debounce from 'lodash.debounce';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyInput from '../../../../components/UI/MyInput';
import { setSearchQuery } from '../../../../redux/slice/dishesSl';

const Search = () => {
  const styleInput = { maxWidth: '220px', width: '100%' };
  const dispatch = useDispatch();
  const query = useSelector((state) => state.dishesSl.searchQuery);
  const [value, setValue] = useState(query);
  const handleSearchQuery = useCallback(
    debounce((query) => dispatch(setSearchQuery(query)), 700),
    [],
  );
  const handleChangeInput = (query) => {
    setValue(query);
    handleSearchQuery(query);
  };
  return (
    <MyInput
      placeholder="Search for food, coffe, etc.."
      isShowIconSearch={true}
      onChanges={handleChangeInput}
      value={value}
      styles={styleInput}
    />
  );
};

export default Search;
