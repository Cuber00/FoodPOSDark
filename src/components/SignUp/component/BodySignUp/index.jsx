import React from 'react';
import { useSelector } from 'react-redux';
import { registerStatusSl } from 'redux/slice/user/user.slice';

import { FULFILLED, PENDING, REJECTED } from 'redux/CONSTANTS';
import { FormSignUp, Fulfilled, Pending, Rejected } from '..';

export const BodySignUp = (props) => {
  const status = useSelector(registerStatusSl);
  console.log(status);
  switch (status) {
    case PENDING:
      return <Pending />;
    case FULFILLED:
      return <Fulfilled />;
    case REJECTED:
      return <Rejected />;
    default:
      return <FormSignUp />;
  }
};
