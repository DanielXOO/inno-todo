import React, { useState } from 'react';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const Password: React.FC<{
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  label: string;
}> = (props) => {
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
      <InputLabel htmlFor="password">{props.label}</InputLabel>
      <OutlinedInput
        id="password"
        value={props.password}
        onChange={(e) => {
          props.setPassword(e.target.value);
        }}
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
        label={props.label}
      ></OutlinedInput>
    </FormControl>
  );
};

export default Password;
