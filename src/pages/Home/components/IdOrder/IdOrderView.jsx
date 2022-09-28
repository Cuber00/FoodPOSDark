import { Title } from 'components';
import React from 'react';

export const IdOrderView = (props) => {
  return <Title type="h2">{`Orders #${props.idOrder}`}</Title>;
};
