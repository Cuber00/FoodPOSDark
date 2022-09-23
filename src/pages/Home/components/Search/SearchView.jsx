import React from 'react';
import { ReactComponent as ISearch } from 'assets/icons/Search.svg';
import PropTypes from 'prop-types';
import cl from './style.module.scss';
export const SearchView = (props) => {
  const [value, setValue] = React.useState(props.value);
  const id = React.useId('search');
  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={cl.wrapper}>
      <label className={cl.label} htmlFor={id}>
        <ISearch />
      </label>
      <input
        className={cl.input}
        id={id}
        type="text"
        placeholder="Search for food, coffe, etc.."
        value={value}
        onChange={(e) => handleChangeInput(e)}
      />
    </div>
  );
};
SearchView.propTypes = {
  value: PropTypes.string,
};
