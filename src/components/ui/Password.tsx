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
import type UserSignUp from '../../models/user/UserSignUp';
import type User from '../../models/user/User';

type UserRenderProps =
  | ControllerRenderProps<UserSignUp, 'repeatPassword'>
  | ControllerRenderProps<User, 'password'>;

interface IPasswordProps {
  field: UserRenderProps;
  errors: FieldErrors<User>;
  label: string;
}

const Password: React.FC<IPasswordProps> = ({ field, errors, label }) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const onChangeVisibility = (): void => {
    setIsPassword((prevState) => !prevState);
  };

  return (
    <FormControl
      size="small"
      sx={{ width: '70%', margin: '5px' }}
      variant="outlined"
      error={errors.password?.message !== undefined}
    >
      <InputLabel htmlFor="password">{label}</InputLabel>
      <OutlinedInput
        id="password"
        {...field}
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
        label={label}
      ></OutlinedInput>
      <FormHelperText>{errors.password?.message}</FormHelperText>
    </FormControl>
  );
};

export default Password;
