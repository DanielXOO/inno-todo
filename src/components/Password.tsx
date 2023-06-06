import React, { useState } from 'react';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { type ControllerRenderProps, type FieldErrors } from 'react-hook-form';
import type UserSignUp from '../models/user/UserSignUp';
import type User from '../models/user/User';

type UserRenderProps =
  | ControllerRenderProps<UserSignUp, 'repeatPassword'>
  | ControllerRenderProps<User, 'password'>;

const Password: React.FC<{
  field: UserRenderProps;
  errors: FieldErrors<User>;
  label: string;
}> = (data) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const onChangeVisibility = (): void => {
    setIsPassword((prevState) => !prevState);
  };

  return (
    <FormControl
      size="small"
      sx={{ width: '70%', margin: '5px' }}
      variant="outlined"
      error={data.errors.password?.message !== undefined}
    >
      <InputLabel htmlFor="password">{data.label}</InputLabel>
      <OutlinedInput
        id="password"
        {...data.field}
        type={isPassword ? 'password' : 'text'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onChangeVisibility}
            >
              {isPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        label={data.label}
      ></OutlinedInput>
      <FormHelperText>{data.errors.password?.message}</FormHelperText>
    </FormControl>
  );
};

export default Password;
