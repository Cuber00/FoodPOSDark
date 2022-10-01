import { Divider, SideBlock, Title, Typography } from 'components';
import React from 'react';
import { ReactComponent as IBack } from 'assets/icons/Back.svg';
import cl from './style.module.scss';
import { BodySignUp } from './component';

export const SignUpView = (props) => {
  const { handleBack } = props;

  return (
    <SideBlock className={cl.wrapper}>
      <IBack className={cl.backIcon} onClick={handleBack} />
      <div className={cl.head}>
        <Title type="h2">Registration</Title>
        <Typography type="large" color="ligth">
          Create an account to place an order
        </Typography>
      </div>
      <Divider />
      <BodySignUp />
    </SideBlock>
  );
};
