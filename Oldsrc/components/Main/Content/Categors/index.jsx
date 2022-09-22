import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategor } from '../../../../redux/slice/categorSl';
import { SERVER_RESPONSE } from '../../../../redux/constants/apiServices';
import Main from './Main';
import Skeleton from './Skeleton';
import Error from './Error';
const Categors = () => {
  const status = useSelector((state) => state.categorSl.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategor());
  }, []);

  switch (status) {
    case SERVER_RESPONSE.fulfilled:
      return <Main />;
    case SERVER_RESPONSE.pending:
      return <Skeleton />;
    case SERVER_RESPONSE.rejected:
      return <Error />;
    default:
  }
  if (status === SERVER_RESPONSE.fulfilled) return <Main />;
};

export default Categors;
