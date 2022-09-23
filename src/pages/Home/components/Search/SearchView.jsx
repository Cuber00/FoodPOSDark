import React from 'react';
import { ReactComponent as ISearch } from 'assets/icons/Search.svg';
import cl from './style.module.scss';
export const SearchView = () => {
  const [value, setValue] = React.useState('');
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
