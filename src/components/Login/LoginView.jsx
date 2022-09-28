import { Button, Divider, RowInput, SideBlock, Title, Typography } from 'components';
import React from 'react';
import { ReactComponent as IBack } from 'assets/icons/Back.svg';
import cl from './style.module.scss';

export const LoginView = () => {
  return (
    <SideBlock className={cl.wrapper}>
      <IBack className={cl.backIcon} />
      <div className={cl.head}>
        <Title type="h2">Authorization</Title>
        <Typography type="large" color="ligth">
          Log in to a previously created account
        </Typography>
      </div>
      <Divider />
      <div className={cl.form}>
        <RowInput title="Email" value="" placeholder="Your email" onChanges={() => {}} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <RowInput title="Password" value="" placeholder="Your password" onChanges={() => {}} />
          <Typography type="small" color="gray">
            Forgot Password?
          </Typography>
        </div>
      </div>
      <div className={cl.footer}>
        <Button type="solid" onClick={() => {}} styles={{ width: '100%' }}>
          Log in
        </Button>
        <div className={cl.row}>
          <Typography>Don't have an account? </Typography>
          <Typography className={cl.primary}>Sign in</Typography>
        </div>
      </div>
    </SideBlock>
  );
};
