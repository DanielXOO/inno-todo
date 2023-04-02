import React from 'react';
import { TextField } from '@mui/material';
import { type ControllerRenderProps, type FieldErrors } from 'react-hook-form';
import type UserSignUp from '../models/user/UserSignUp';
import type User from '../models/user/User';

type UserProps = User | UserSignUp;

const Email: React.FC<{
  field: ControllerRenderProps<UserProps, 'email'>;
  errors: FieldErrors<UserProps>;
}> = (data) => {
  return (
    <TextField
      {...data.field}
      variant="outlined"
      label="Email"
      margin="normal"
      size="small"
      error={!(data.errors.email == null)}
      helperText={data.errors.email?.message}
      sx={{
        width: '70%'
      }}
    />
  );
};

export default Email;
