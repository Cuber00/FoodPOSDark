import React from 'react';
import { Button, SideBlock, Title } from 'components';
import cl from '../style.module.scss';
import { RadioTypeOrder, FormOrder, Total, IdOrder } from 'pages/Home/components';

export const AsideNewOrder = () => {
  return (
    <div className={cl.aside}>
      <SideBlock>
        <IdOrder />
        <RadioTypeOrder />
        <FormOrder />
        <Total />
        <Button type="solid" isShadow={true}>
          Continue to Payment
        </Button>
      </SideBlock>
    </div>
  );
};
