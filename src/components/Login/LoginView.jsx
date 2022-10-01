import { Button, Divider, RowInput, SideBlock, Title, Typography } from 'components';
import React from 'react';
import { ReactComponent as IBack } from 'assets/icons/Back.svg';
import cl from './style.module.scss';
import { useForm } from 'react-hook-form';

export const LoginView = (props) => {
  const { onSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <SideBlock className={cl.wrapper}>
      <IBack className={cl.backIcon} onClick={props.handleBack} />
      <div className={cl.head}>
        <Title type="h2">Authorization</Title>
        <Typography type="large" color="ligth">
          Log in to a previously created account
        </Typography>
      </div>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={cl.form}>
          <RowInput
            title="Email"
            value=""
            placeholder="Your email"
            onChanges={() => {}}
            hookform={{
              ...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
                  message: 'Please enter a valid email address',
                },
              }),
            }}
            aria_invalid={errors.email ? 'true' : 'false'}
            errors={errors}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <RowInput
              title="Password"
              value=""
              placeholder="Your password"
              onChanges={() => {}}
              hookform={{
                ...register('password', {
                  required: 'Password is required',
                }),
              }}
              aria_invalid={errors.password ? 'true' : 'false'}
              errors={errors}
            />
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
            <Typography className={cl.primary} onClick={props.linkSignUp}>
              Sign in
            </Typography>
          </div>
        </div>
      </form>
    </SideBlock>
  );
};
