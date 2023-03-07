import React from 'react';
import { TextField } from '@mui/material';

const Login: React.FC = () => {
  return (
    <TextField
      id="login"
      variant="outlined"
      label="Login"
      margin="normal"
      size="small"
      sx={{
        width: '70%'
      }}
    />
  );
};

export default Login;
