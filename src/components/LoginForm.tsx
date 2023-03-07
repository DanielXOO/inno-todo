import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Password from './Password';
import Login from './Login';
import Logo from '../assets/images/logo.png';

const LoginForm: React.FC = () => {
  const [userPassword, setUser] = useState('');

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        width: '400px',
        minWidth: '300px',
        borderRadius: '15px',
        boxShadow: 3
      }}
      component="form"
      pb="50px"
      pt="50px"
    >
      <img src={Logo} width="30%" height="30%" />
      <Typography variant="h4" align="center" m="10px">
        InnoToDo
      </Typography>
      <Login />
      <Password />
      <Button
        variant="contained"
        sx={{
          marginTop: '25px'
        }}
      >
        Log in
      </Button>
    </Box>
  );
};

export default LoginForm;
