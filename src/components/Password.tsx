import React, { useState } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const Password: React.FC = () => {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const onChangeVisibility = (): void => {
    setIsPassword((prevState) => !prevState);
  };

  return (
    <FormControl
      size="small"
      sx={{ width: '70%', margin: '5px' }}
      variant="outlined"
    >
      <InputLabel htmlFor="password">Password</InputLabel>
      <OutlinedInput
        id="password"
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
        label="Password"
      ></OutlinedInput>
    </FormControl>
  );
};

export default Password;
