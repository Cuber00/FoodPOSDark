import React from 'react';
import { useSelector } from 'react-redux';

const Error = () => {
  const error = String(useSelector((state) => state.categorSl.error));
  return <div>{error}</div>;
};

export default Error;
