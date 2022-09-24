import debounce from 'lodash.debounce';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchQuerySelector } from 'redux/slice/dishes/dishes.slice';
import { setSearchQuery } from '../../../../redux/slice/dishes/dishes.slice';
import { SearchView } from './SearchView';

export const SearchContainer = () => {
  const searchQuery = useSelector(searchQuerySelector);
  const dispatch = useDispatch();
  const handleChange = React.useCallback(
    debounce((value) => dispatch(setSearchQuery(value)), 700),
    [],
  );

  return <SearchView value={searchQuery} handleChange={handleChange} />;
};
