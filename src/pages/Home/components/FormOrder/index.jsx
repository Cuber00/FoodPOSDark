import { Divider, Typography } from 'components';
import { FormOrderBody } from 'pages/Home/components';
import React from 'react';
import cl from './style.module.scss';
export const FormOrder = () => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.head}>
        <Typography type="large" weight="semibold">
          Item
        </Typography>
        <Typography type="large" weight="semibold">
          Qty
        </Typography>
        <Typography type="large" weight="semibold">
          Price
        </Typography>
      </div>

      <FormOrderBody />
    </div>
  );
};
