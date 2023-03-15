import React, { useState } from 'react';
import { Box, Button, Link, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png';
import Email from '../components/Email';
import Password from '../components/Password';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

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
        <Email setEmail={setEmail} email={email} />
        <Password
          setPassword={setPassword}
          password={password}
          label="Password"
        />
        <Password
          setPassword={setPasswordConfirm}
          password={passwordConfirm}
          label="Password confirmation"
        />
        <Link
          href="/login"
          sx={{
            marginTop: '5px'
          }}
        >
          Log in
        </Link>
        <Button
          variant="contained"
          sx={{
            marginTop: '25px'
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;
