import React from 'react';
import { Button, SideBlock, Title } from 'components';
import cl from '../style.module.scss';
import { RadioTypeOrder, FormOrder, Total } from 'pages/Home/components';

export const AsideNewOrder = () => {
  return (
    <div className={cl.aside}>
      <SideBlock>
        <Title type="h2">Orders #34562</Title>
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
