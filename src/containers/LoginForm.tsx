import React, { useState } from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import Email from '../components/Email';
import Password from '../components/Password';
import Logo from '../assets/images/logo.png';

const LoginForm: React.FC = () => {
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ width: '100%' }}
    >
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
        <Email setEmail={setUserEmail} email={email} />
        <Password
          setPassword={setUserPassword}
          password={password}
          label="Password"
        />
        <Link
          href="/registration"
          sx={{
            marginTop: '5px'
          }}
        >
          Sign Up
        </Link>
        <Button
          variant="contained"
          sx={{
            marginTop: '25px'
          }}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
