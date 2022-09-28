import { Button, Divider, InputRadio, RowInput, SideBlock, Title, Typography } from 'components';
import React from 'react';
import { ReactComponent as IBack } from 'assets/icons/Back.svg';
import cl from './style.module.scss';
export const SignUpView = () => {
  return (
    <SideBlock className={cl.wrapper}>
      <IBack className={cl.backIcon} />
      <div className={cl.head}>
        <Title type="h2">Registration</Title>
        <Typography type="large" color="ligth">
          Create an account to place an order
        </Typography>
      </div>
      <Divider />
      <div className={cl.form}>
        <RowInput
          title="Full Name"
          value=""
          placeholder="Enter your full name"
          onChanges={() => {}}
        />
        <RowInput title="Email" value="" placeholder="Your email" onChanges={() => {}} />
        <RowInput title="Password" value="" placeholder="Your password" onChanges={() => {}} />

        <InputRadio>
          I agree all statements as <a href="">terms of service</a>
        </InputRadio>
      </div>
      <div className={cl.footer}>
        <Button type="solid" onClick={() => {}} styles={{ width: '100%' }}>
          Sign up
        </Button>
        <div className={cl.row}>
          <Typography>Already have an account?</Typography>
          <Typography className={cl.primary}>Log in</Typography>
        </div>
      </div>
    </SideBlock>
  );
};
