import { Button, InputRadio, RowInput, Typography } from 'components';
import React from 'react';
import cl from '../../style.module.scss';
import { useForm } from 'react-hook-form';
export const FormSignUpView = (props) => {
  const { onSubmit, linkLogin } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cl.form}>
        <RowInput
          title="Full Name"
          value=""
          placeholder="Enter your full name"
          hookform={{
            ...register('fullname', {
              required: 'Full name is required',
              maxLength: { value: 64, message: 'Maximum field length 64' },
              minLength: { value: 4, message: 'Minimum field length 4' },
            }),
          }}
          aria_invalid={errors.fullname ? 'true' : 'false'}
          onChanges={() => {}}
          errors={errors}
        />
        <RowInput
          title="Email"
          type="text"
          value=""
          placeholder="Your email"
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
          onChanges={() => {}}
          errors={errors}
        />
        <RowInput
          title="Password"
          type="password"
          value=""
          placeholder="Your password"
          hookform={{ ...register('password', { required: 'Password is required' }) }}
          aria_invalid={errors.password ? 'true' : 'false'}
          onChanges={() => {}}
          errors={errors}
        />

        <InputRadio
          errors={errors}
          hookform={{
            ...register('checkbox', {
              required: 'The field is required by agreement',
            }),
          }}>
          I agree all statements as <a href="#">terms of service</a>
        </InputRadio>
      </div>
      <div className={cl.footer}>
        <Button type="solid" onClick={() => {}} styles={{ width: '100%' }}>
          Sign up
        </Button>
        <div className={cl.row}>
          <Typography>Already have an account?</Typography>
          <Typography className={cl.primary} onClick={linkLogin}>
            Log in
          </Typography>
        </div>
      </div>
    </form>
  );
};
